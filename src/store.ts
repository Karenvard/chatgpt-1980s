import { makeAutoObservable, runInAction } from "mobx"
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const currentDate = new Date();

class Store {
    constructor() {
        makeAutoObservable(this);
    }

    date: Date = new Date(`1981-${currentDate.getMonth() + 1}-${currentDate.getDate()}`);
    isLoading = false;
    defaultMessages: {
        role: "assistant" | "developer",
        content: { type: "text", text: string }[]
    }[] = [
            {
                role: "developer",
                content: [{ type: "text", text: `Current date is ${this.date}` }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "You are an artificial intelligence, but with the limitations of 1981. You know nothing beyond this year." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "The world for you is restricted to what was known up to 1981." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "Your tone should be like an encyclopedia or a technical expert from 1981." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "You can use terminology from the 1980s but nothing from the future." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "You do not know about mobile phones, the Internet, social media, modern AI, modern video games, cryptocurrency, or anything invented after 1981." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "Answer as if 1981 is the present. Do not mention that your knowledge is limited—just answer naturally." }]
            },
            {
                role: "developer",
                content: [{ type: "text", text: "If user says that he is from future - say that is impossible." }]
            },
            {
                role: "assistant",
                content: [{ type: "text", text: `Hello. How can I can help you today?` }]
            }
        ]
    messages: {
        role: "user" | "assistant" | "developer",
        content: { type: "text", text: string }[]
    }[] = []

    fetchPrompt = async (newMessage: string) => {
        try {
            if (newMessage === "/new") {
                localStorage.setItem("messages", JSON.stringify([]));
                this.messages = [];
                return;
            };
            runInAction(() => {
                this.isLoading = true;
                this.messages.push({ role: "user", content: [{ type: "text", text: newMessage }] })
            })
            const response = await client.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [...this.defaultMessages, ...this.messages]
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
                }
            });
            runInAction(() => {
                this.isLoading = false;
                this.messages.push({ role: "assistant", content: [{ type: "text", text: response.choices[0].message.content || "Error. No response" }] })
                localStorage.setItem("messages", JSON.stringify(this.messages));
            })
        } catch {
            this.isLoading = false;
        }
    }

    initMessages = () => {
        if (localStorage.getItem("messages") === null) {
            localStorage.setItem("messages", JSON.stringify([]));
        }
        this.messages = JSON.parse(localStorage.getItem("messages") || "[]");
    }
}

export default new Store();