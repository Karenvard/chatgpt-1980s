import { Box, Image, Span } from "@chakra-ui/react";
// @ts-ignore
import GPTLogo from "../assets/chatgpt-logo.png";
import { observer } from "mobx-react-lite";
import Store from "../store";

export const Logo = observer(() => {
    const { date } = Store;
    return (
        <Box mt="3vh" display="flex" flexDir="row" alignItems="center">
            <Image width="30%" filter="drop-shadow(0px 0px 4px #52c39a)" src={GPTLogo} alt="logo" />
            <Box display="flex" flexDir="column">
                <Span
                    fontSize="4em"
                    color="white"
                    textShadow={`0 0 5px white, 0 0 10px white`}
                    whiteSpace="pre-wrap"
                >Chat GPT</Span>
                <Span
                    fontSize="1.4em"
                    color="white"
                    textShadow={`0 0 5px white, 0 0 10px white`}
                    whiteSpace="pre-wrap">
                    To start new conversation enter - "/new"
                </Span>
            </Box>
            <Span
                fontSize="3em"
                color="white"
                textShadow={`0 0 5px white, 0 0 10px white`}
                whiteSpace="pre-wrap"
                ml="8vw"
            >{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</Span>

        </Box>
    );
});