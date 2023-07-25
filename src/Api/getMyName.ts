export const getMyName = async () => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: `bearer ${localStorage.getItem("token")}`,
        },
    };

    const userName = await fetch("https://localhost:7043/api/auth", options)
        .then(res => res.text());

    return userName;
}
