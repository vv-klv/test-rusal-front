import { ReactNode } from "react";
import { Card, CloseButton } from "@chakra-ui/react";

interface MyCardProps {
    children: ReactNode;
    handleClose: () => void;
}

export const UserForm = ({ children, handleClose }: MyCardProps) => {
    return (
        <Card p={8} w={350} pos={"relative"}>
            <CloseButton ml="auto" right={2} top={2} pos={"absolute"} onClick={handleClose} />
            { children }
        </Card>
    );
};
