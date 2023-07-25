import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";

interface MyContainerProps {
    children: ReactNode;
    justify?: string;
    align?: string;
}

export const MyContainer = ({ children, justify, align }: MyContainerProps) => {
    return (
        <Container
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent={justify ?? "start"}
            alignItems={align ?? "center"}
            mx="auto"
            height="100%"
            maxWidth="90%"
        >
            { children }
        </Container>
    );
};
