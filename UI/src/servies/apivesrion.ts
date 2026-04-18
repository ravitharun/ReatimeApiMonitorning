export const API_URL = import.meta.env.VITE_MODE == "Development" ? "http://localhost:8000/" : import.meta.env.VITE_API_URL
export const Scoket_API_URL = import.meta.env.VITE_MODE == "Development" ? "http://localhost:8000/" : import.meta.env.VITE_API_URL
export const userinfo: any | null = localStorage.getItem('userInfo')
export const userRole: String|null = JSON.parse(userinfo)?.userRole