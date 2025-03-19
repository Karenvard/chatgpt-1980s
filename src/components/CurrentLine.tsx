import { Box, Span } from "@chakra-ui/react"
import { observer } from "mobx-react-lite";
import React from "react";
import Store from "../store";

export const CurrentLine = observer(() => {
    const { fetchPrompt, isLoading } = Store;
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.currentTarget.value) {
            fetchPrompt(e.currentTarget.value);
            e.currentTarget.value = "";
        }
        document.body.scrollTop = document.body.scrollHeight;
    };
    return (
        <Box
            color={!isLoading ? "white" : "#52c39a"}
            textShadow={!isLoading ? "0 0 5px white, 0 0 10px white" : "0 0 5px #52c39a, 0 0 10px #52c39a"}
            textAlign="start"
            fontSize="22px"
            ml="20px"
        >
            &gt; {!isLoading ? <input type="text" autoFocus spellCheck={false} onKeyDown={onEnter} onBlur={e => e.target.focus()} style={{
                textShadow: "0 0 5px white, 0 0 10px white",
                border: "none",
                outline: "none",
                background: "transparent",
                width: "96%",
            }} /> : <Span
                color="#52c39a"
                textShadow="0 0 5px #52c39a, 0 0 10px #52c39a"
                textAlign="start"
                fontSize="22px"
            >...</Span>}
        </Box>
    )
})