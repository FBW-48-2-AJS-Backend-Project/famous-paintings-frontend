const serverURL = "http://localhost:5000";

export const loginUser = async (data) => {
    try {
        const res = await(await fetch(`${serverURL}/users/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( data )
        })).json();
        return res;
    } catch (error) {
        return error;
    }
}