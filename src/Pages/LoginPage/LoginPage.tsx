import { Button, CardHeader, FormControl, FormHelperText, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MyContainer } from "../../Components/MyContainer/MyContainer";
import { UserForm } from "../../Components/UserForm/UserForm";
import { loginUser } from "../../Api/loginUser";

export const LoginPage = () => {
    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [loginFailed, setLoginFailed] = useState<boolean>();

    const navigate = useNavigate();

    const handleInputChange = (e:  ChangeEvent<HTMLInputElement>, inputType: string) => {
        if (inputType === "password") {
            setPasswordInput(e.target.value);
        }
        if (inputType === "login") {
            setLoginInput(e.target.value);
        }
    };

    const handleLogin = async (path: string) => {
        const loginResult = await loginUser(loginInput, passwordInput);

        if (!loginResult) {
            setLoginFailed(true);
            setPasswordInput('');
            return;
        }

        navigate(path);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleLogin("/");
    };

    return (
        <MyContainer justify={"center"}>
            <UserForm handleClose={() => navigate("/")}>
                <CardHeader fontWeight={700} fontSize={"3xl"} mt={0} px={0} py={0}>Вход</CardHeader>
                <Form onSubmit={event => handleSubmit(event)}>
                    <FormControl mt={8}>
                        <FormLabel mt={8}>Логин</FormLabel>
                        <Input
                            type="login"
                            id={"login"}
                            value={loginInput} onChange={e => handleInputChange(e, "login")}
                        />
                        <FormLabel mt={2}>Пароль</FormLabel>
                        <Input
                            type="password"
                            id={"password"}
                            value={passwordInput} onChange={e => handleInputChange(e, "password")}
                        />
                        {
                            loginFailed &&
                            <Text color="red">
                                Неверный логин или пароль!
                            </Text>
                        }
                    </FormControl>

                    <Button
                        onClick={() => handleLogin("/tasks")}
                        colorScheme="green" w="full" mx={"auto"} mt={16}
                    >
                        Войти
                    </Button>
                    <Text fontSize="sm" mt={4}>
                        Еще не зарегистрированы? &nbsp;
                        <Link color="blue" href="/register">Регистрация</Link>
                    </Text>
                </Form>
            </UserForm>
        </MyContainer>
    );
};
