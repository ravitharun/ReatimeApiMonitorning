import API from "./api"

export const FetchAllLogs = async () => {
    try {
        const response = await API.get("/monitoring/Logs/Logs")
        return response

    } catch (error) {
        throw error
    }
} 