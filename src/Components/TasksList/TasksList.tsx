import { ReactNode } from "react";
import "./tasks-list.scss"

interface TasksListProps {
    children: ReactNode
}

export const TasksList = ({ children }: TasksListProps) => {
    return (
        <div className="tasks-list">
            { children }
        </div>
    );
};
