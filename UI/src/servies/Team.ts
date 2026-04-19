import type { teamFormat } from "../Type/Team"
import API from "./api"

export const MakeTeam = async (team: teamFormat) => {
    try {
        const response = await API.post("/monitoring/Teams/MakeTeams", { Team: team })
        return response
    } catch (error) {
        return error

    }
}