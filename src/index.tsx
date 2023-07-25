import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { TasksPage } from "./Pages/TasksPage/TasksPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/login", element: <LoginPage />},
    {path: "/register", element: <RegisterPage />},
    {path: "/tasks", element: <TasksPage />}
]);


const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bg: "linear-gradient(135deg, #152759, #391843)",
            }
        })
    },
})


root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
