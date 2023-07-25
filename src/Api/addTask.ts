import { taskUpdateOrAddInfo } from "../Types/types";

export const addTask = async (taskInfo: taskUpdateOrAddInfo) => {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
            "cache-control": "no-cache"
        },
        body: JSON.stringify(taskInfo)
    };

    return await fetch(`https://localhost:7043/api/usertasks`, options)
        .then(resp => resp.json());
}
