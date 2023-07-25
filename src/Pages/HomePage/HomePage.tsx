import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MyContainer } from "../../Components/MyContainer/MyContainer";

export function HomePage() {
    const navigate = useNavigate();

    const handleButtonClick = (path: string) => {
        navigate(path);
    }

    if (localStorage.getItem("token")) {
        return <MyContainer justify={"center"}>
            <Button
                colorScheme="green"
                onClick={() => handleButtonClick("/login")}
                size="lg" w="350px" display={"block"}
            >
                Перейти к списку задач
            </Button>
        </MyContainer>
    }

    return (
        <MyContainer justify={"center"}>
            <Button
                colorScheme="green"
                onClick={() => handleButtonClick("/login")}
                size="lg" w="350px" display={"block"}
            >
                Авторизация
            </Button>
            <Button
                colorScheme="gray"
                onClick={() => handleButtonClick("/register")}
                mt={8} size="lg" w="350px" display="block"
            >
                Регистрация
            </Button>
        </MyContainer>
    )
}
