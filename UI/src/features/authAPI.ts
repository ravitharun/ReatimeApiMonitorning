import API from "../servies/api";

type UserLogin = {
    name:string,
    email: string;
    password: string;
};
type UserLogins = {
    name:string,
    email: string;
    password: string;
};

export const loginUser = async ({name, email, password }: UserLogin) => {
    console.log({ name,email, password });

    try {
        const res = await API.post("/login", {
            email,
            password,
        });
        return res.data;
    } catch (err: any) {
        throw err.response?.data?.error || "Login failed";
    }
};