import { Box, Span } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
    from: "user" | "assistant" | "developer";
    text: string
}


export const TerminalLine: FC<IProps> = ({ from, text }) => {
    const color = from === "assistant" ? "#52c39a" : "white";
    return (
        <Box ml="20px">
            <Span
                fontSize="22px"
                color={color}
                textShadow={`0 0 5px ${color}, 0 0 10px ${color}`}
                whiteSpace="pre-wrap"
            >
                &gt; {text}
            </Span>
            <br />
        </Box>
    )
};