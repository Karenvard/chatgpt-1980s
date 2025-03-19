import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
    children: React.ReactNode
}

const beforeStyle = {
    content: '" "',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
    zIndex: 2,
    backgroundSize: '100% 2px, 3px 100%',
    pointerEvents: 'none',
}

const afterStyle = {
    content: '" "',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(18, 16, 16, 0.1)',
    opacity: 0,
    zIndex: 2,
    pointerEvents: 'none',
    animation: 'flicker 0.15s infinite'
}

export const ContainerCRT: FC<IProps> = ({ children }) => {
    return (
        <Box
            animation="textShadow 1.6s infinite"
            position="relative"
            overflow="hidden"
            w="100%"
            h="100%"
            _before={beforeStyle}
            _after={afterStyle}
        >
            {children}
        </Box>
    );
}