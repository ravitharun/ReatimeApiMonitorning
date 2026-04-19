const Teams = require("../models/MakeTeam");

const MakeTeams = async (req, res) => {
    try {
        const { Team } = req.body
        console.log(Team, 'Team')
        const savetm = await new Teams({
            teamName: Team.teamName, teamDesc: Team.teamDesc,
            empIds: Team.empIds,
            CreatedByID: Team.CreatedByID,
            TotalMember: Team.empIds.length
        })
        await savetm.save()
        return res.status(200).json({ message: "ok" })

    } catch (error) {
        console.log(error.message);

        return res.status(500).json({ message: error })

    }
}


module.exports = MakeTeams