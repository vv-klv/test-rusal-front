export const loginUser = async (loginInput: string, passwordInput: string) => {
    const params = {
        Username: loginInput,
        Password: passwordInput
    }

    const optionsForCheckLogin = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        body: JSON.stringify(params)
    };

    const res = await fetch("https://localhost:7043/api/auth/login", optionsForCheckLogin)
        .then(resp => resp.text());

    if (res) {
        localStorage.setItem("token", `${res}`);
    }

    return res
}
