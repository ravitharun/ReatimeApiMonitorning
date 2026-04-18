import { token } from "../user"

export const handelLogout = () => {
    if (token) {
        localStorage.removeItem("token")

        return setTimeout(() => {
            window.location.href = '/login'
        }, 2500);
    }
}