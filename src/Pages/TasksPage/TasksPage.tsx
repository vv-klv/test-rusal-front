import { MyContainer } from "../../Components/MyContainer/MyContainer";
import { TasksList } from "../../Components/TasksList/TasksList";
import { useEffect, useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { getAllTasks } from "../../Api/getAllTasks";
import { Task, taskUpdateOrAddInfo } from "../../Types/types";
import { TaskCard } from "../../Components/TaskCard/TaskCard";
import { useNavigate } from "react-router-dom";
import { updateTask } from "../../Api/updateTask";
import { getMyName } from "../../Api/getMyName";
import { addTask } from "../../Api/addTask";

export function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [myName, setMyName] = useState('');
    const [needNewTask, setNeedNewTask] = useState(false);

    const navigate = useNavigate();
    const ref = useRef(false);

    const newTask = {
        "id": -1,
        "userName": myName,
        "createDate": '',
        "updateDate": '',
        "taskName": '',
        "taskDescr": '',
        "taskStatus": ''
    };

    const showNoTasks = localStorage.getItem("token") && !tasks.length;
    const getTasks = async () => {
        const allTasks = await getAllTasks().then(res => res.json());
        setTasks(allTasks);
    };

    useEffect(() => {
        if (!ref.current) {
            (async () => {
                await getTasks();
                await getUserName();
            })();
        }
        ref.current = true;
    }, [tasks]);

    const handleUpdateTask = async (taskInfo: taskUpdateOrAddInfo, id: number) => {
        const allTasks = await updateTask(taskInfo, id);
        setTasks(allTasks);
    };

    const handleAddTask = async (taskInfo: taskUpdateOrAddInfo) => {
        const allTasks = await addTask(taskInfo);
        setNeedNewTask(false)
        setTasks(allTasks);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const getUserName = async () => {
        const userName = await getMyName();
        setMyName(userName);
    }


    return (
        <MyContainer>
            {
                !localStorage.getItem("token") &&
                <>
                    <Text fontSize="xl" color="tomato">Войдите, чтобы просматривать список задач!</Text>
                    <Button onClick={() => navigate("/")} size="lg" w="350px" mt={10}>Войти</Button>
                </>
            }
            {
                showNoTasks &&
                    <Text fontSize="xl" color="tomato">Задач пока нет!</Text>
            }
            {
                tasks.length > 0 &&
                <>
                    <Box
                        my={8}
                        display="flex"
                        justifyContent="space-between"
                        w="full"
                        minW="625px"
                    >
                        <Button
                            key="add"
                            size="lg" w="200px" colorScheme={needNewTask ? "orange" : "blue"}
                            onClick={() => setNeedNewTask(prev => !prev)}
                        >
                            { needNewTask ? "Не добавлять задачу" : "Добавить задачу" }
                        </Button>
                        <Text fontSize="3xl" color="white" ml="auto" mr={10}>
                            {myName}
                        </Text>
                        <Button
                            key="logout"
                            size="lg" w="200px" colorScheme="red"
                            onClick={handleLogout}
                        >
                            Выйти
                        </Button>
                    </Box>
                    <TasksList>
                        {needNewTask && <TaskCard task={newTask} updateTask={handleAddTask}/>}
                        {tasks.map(task =>
                            <TaskCard task={task} key={task.id} updateTask={handleUpdateTask}/>
                        )}
                    </TasksList>
                </>
            }
        </MyContainer>
    );
}
