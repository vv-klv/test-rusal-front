import { taskUpdateOrAddInfo } from "../Types/types";

export const updateTask = async (taskInfo: taskUpdateOrAddInfo, id: number) => {
    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
            "cache-control": "no-cache"
        },
        body: JSON.stringify(taskInfo)
    };

    return await fetch(`https://localhost:7043/api/usertasks/${id}`, options)
        .then(resp => resp.json());
}
