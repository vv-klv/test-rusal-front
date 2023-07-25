export const getAllTasks = async () => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
        },
    };

    const res = await fetch("https://localhost:7043/api/UserTasks", options);

    return res;
}
