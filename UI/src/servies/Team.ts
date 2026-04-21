import type { teamFormat } from "../Type/Team"
import API from "./api"
import { userEmpid, userRole } from "./apivesrion"

export const MakeTeam = async (team: teamFormat) => {
    try {
        const response = await API.post("/monitoring/Teams/MakeTeams", { Team: team })
   
        return response
    } catch (error) {
     
         throw error; 

    }
}
export const getallTeamsInfo = async () => {
    try {
        console.log(userEmpid, 'userinfo.userEmpIds');

        const response = await API.get('/monitoring/Teams/GetTeams', {
            params: {
                id: userEmpid,
                type: userRole == 'developer' ? "GetBydeveloper" : "GetByteamleader"
            }
        })
        // const response = await API.get(`/monitoring/Teams/GetTeams?id=${userEmpid}`)
        return response
    } catch (error) {
        throw error
    }
}