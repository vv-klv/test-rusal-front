import { Button, CardHeader, FormControl, FormHelperText, FormLabel, Input, Link, Text } from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { MyContainer } from "../../Components/MyContainer/MyContainer";
import { UserForm } from "../../Components/UserForm/UserForm";
import {registerUser} from "../../Api/registerUser";

export const RegisterPage = () => {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [registrationFailed, setRegistrationFailed] = useState(false)
    const navigate = useNavigate();

    const handleInputChange = (e:  ChangeEvent<HTMLInputElement>, inputType: string) => {
        if (inputType === "password") {
            setPasswordInput(e.target.value);
        }
        if (inputType === "login") {
            setLoginInput(e.target.value);
        }
    }

    const handleButtonClick = async (path: string) => {
        const user = await registerUser(loginInput, passwordInput);

        if (typeof(user) === "string") {
            setRegistrationFailed(true);
            return;
        }

        navigate(path);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleButtonClick("/")
    }

    return (
        <MyContainer justify={"center"}>
            <UserForm handleClose={() => navigate("/")}>
                <CardHeader fontWeight={700} fontSize={"3xl"} mt={0} px={0} py={0}>Регистрация</CardHeader>
                <Form onSubmit={event => handleSubmit(event)}>
                    <FormControl mt={8}>
                        <FormLabel mt={8}>Логин</FormLabel>
                        <Input
                            type="login" id={"login"}
                            value={loginInput}
                            onChange={e => handleInputChange(e, "login")}
                        />
                        <FormLabel mt={2}>Пароль</FormLabel>
                        <Input
                            type="password" id={"password"}
                            value={passwordInput}
                            onChange={e => handleInputChange(e, "password")}
                        />
                        {
                            registrationFailed &&
                            <FormHelperText color={"red"}>
                                Пользователь уже существует!
                            </FormHelperText>
                        }
                    </FormControl>

                    <Button
                        onClick={() => handleButtonClick("/login")}
                        colorScheme="green" w="full" mx={"auto"} mt={16}
                    >
                        Зарегистрироваться
                    </Button>
                    <Text fontSize='sm' mt={4}>
                        Уже зарегистрированы?&nbsp;
                        <Link color="blue" href="/login">Войти</Link>
                    </Text>
                </Form>
            </UserForm>
        </MyContainer>
    );
};
