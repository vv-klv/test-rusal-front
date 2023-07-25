import { useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    FormLabel,
    Input,
    List,
    ListItem,
    Select,
    Text
} from "@chakra-ui/react";
import { Task, taskUpdateOrAddInfo } from "../../Types/types";
import { BsFillPersonFill } from "react-icons/bs";

interface TaskCardProps {
    task: Task;
    updateTask: (taskInfo: taskUpdateOrAddInfo, id: number) => void;
}

export const TaskCard = ({ task, updateTask }: TaskCardProps) => {
    const [nameValue, setNameValue] = useState(task.taskName);
    const [descrValue, setDescrValue] = useState(task.taskDescr);
    const [statusValue, setStatusValue]
        = useState(task.taskStatus === '' ? task.taskStatus : "Новая");

    const stringToDate = (stringDate: string) => {
        return stringDate === ''
            ? 'Сейчас'
            : new Date(stringDate).toDateString();
    }

    const params = {
        taskName: nameValue,
        taskDescr: descrValue,
        taskStatus: statusValue
    }

    return (
        <Card w="full">
            <CardHeader>
                <FormLabel color="blue.500">Название задачи</FormLabel>
                <Input
                    mt={-1} size='sm'
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
            </CardHeader>
            <CardBody py={0}>
                <FormLabel mt={-2} color="blue.500">Описание задачи</FormLabel>
                <Input
                    mt={-1} size='sm'
                    value={descrValue}
                    onChange={(e) => setDescrValue(e.target.value)}
                />
                <FormLabel mt={3} color="blue.500">Статус задачи</FormLabel>
                <Select
                    mt={-1} size='sm'
                    placeholder={statusValue}
                    value={statusValue}
                    onChange={(e) => setStatusValue(e.target.value)}
                >
                    <option value='Новая'>Новая</option>
                    <option value='Принята к исполнению'>Принята к исполнению</option>
                    <option value='Выполнена'>Выполнена</option>
                </Select>
            </CardBody>
            <CardFooter mt={2}>
                <List>
                    <ListItem key={1} fontSize="sm">Дата создания: { stringToDate(task.createDate) }</ListItem>
                    <ListItem key={2} fontSize="sm">Дата изменения: { stringToDate(task.updateDate) }</ListItem>
                    <ListItem
                        key={3}
                        fontSize="sm"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        mt={2}
                    >
                        <BsFillPersonFill fontSize="1.25rem">User</BsFillPersonFill><Text color="blue.500">{ task.userName }</Text>
                    </ListItem>
                </List>
                <Button ml="auto" onClick={() => updateTask(params, task.id)}>{ task.id < 0 ? "Добавить" : "Подтвердить"}</Button>
            </CardFooter>
        </Card>
    );
};
