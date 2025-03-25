import { motion } from "framer-motion";
import { Image, Span } from "@chakra-ui/react";
// @ts-ignore
import GPTLogo from "../assets/chatgpt-logo.png";

export const Animation = () => {
    return (
        <motion.div
            initial={{ opacity: 0, height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.img
                initial={{ filter: "drop-shadow(0px 0px 0px #52c39a)", width: "30%", transform: "rotate(0deg)" }}
                animate={{ transform: "rotate(360deg)" }}
                transition={{ duration: 4 }}
                src={GPTLogo} alt="logo" />
            <Span
                pr="20vw"
                fontSize="4em"
                color="white"
                textShadow={`0 0 5px white, 0 0 10px white`}
                whiteSpace="pre-wrap"
            >Chat GPT</Span>
        </motion.div>
    )
}