import type { teamFormat } from "../Type/Team"
import API from "./api"
import { userEmpid, userinfo } from "./apivesrion"

export const MakeTeam = async (team: teamFormat) => {
    try {
        const response = await API.post("/monitoring/Teams/MakeTeams", { Team: team })
        return response
    } catch (error) {
        return error

    }
}
export const getallTeamsInfo = async () => {
    try {
        console.log(userEmpid,'userinfo.userEmpIds');
        
        const response = await API.get('/monitoring/Teams/GetTeams', {
            params: {
                id: userEmpid
            }
        })
        // const response = await API.get(`/monitoring/Teams/GetTeams?id=${userEmpid}`)
        return response
    } catch (error) {
        return error
    }
}