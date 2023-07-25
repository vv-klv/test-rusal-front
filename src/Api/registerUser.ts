export const registerUser = async (loginInput: string, passwordInput: string) => {
    const params = {
        Username: loginInput,
        Password: passwordInput
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        body: JSON.stringify(params)
    };

    const res = await fetch("https://localhost:7043/api/auth/register", options);
    if (!res.ok) {
        return "User Already Exists";
    }

    return await res.json();
}
