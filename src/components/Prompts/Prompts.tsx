import { Box } from "@chakra-ui/react";
import { TerminalLine } from "./TerminalLine";
import { observer } from "mobx-react-lite";
import Store from "../../store";
import { useEffect } from "react";

export const Prompts = observer(() => {
    const { messages, defaultMessages, initMessages } = Store;

    useEffect(() => {
        initMessages();
    }, [])

    return (
        <Box mt="5vh">
            {[...defaultMessages, ...messages].map(message => {
                if (message.role === "developer") return null;
                return <TerminalLine from={message.role} text={message.content[0].text} />   
            })}
        </Box>
    );
})