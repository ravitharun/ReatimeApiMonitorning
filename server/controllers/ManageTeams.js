const Teams = require("../models/MakeTeam");
const user = require("../models/User");

const MakeTeams = async (req, res) => {
    try {
        const { Team } = req.body;

        const allUsers = await user.find({}, { userEmpId: 1 });

        const existingIds = new Set(
            allUsers.map(u => u.userEmpId)
        );
        
        const notFound = [];

        for (let id of Team.empIds) {
            if (!existingIds.has(id)) {
                notFound.push(id);
            }
        }

        if (notFound.length > 0) {
            return res.status(404).json({
                message: "Some EmpIds are not matched",
                IDSNOTMatched: notFound
            });
        }

        // Save team only if all IDs exist
        const savetm = new Teams({
            teamName: Team.teamName,
            teamDesc: Team.teamDesc,
            empIds: Team.empIds,
            CreatedByID: Team.CreatedByID,
            TotalMember: Team.empIds.length
        });

        await savetm.save();

        return res.status(201).json({ message: "Team created successfully" });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}

// get all teams by the team leader by Empid
const getAllTeams = async (req, res) => {
    try {
        const { id, type } = req.query;
        // GetBydeveloper
        console.log({ id, type });

        if (!id) {
            return res.status(400).json({ message: "User id is required" });
        }
        const teams = await Teams.find({ CreatedByID: id });
        const getteams = await Teams.find({});
        console.log(getteams, 'getteams');

        const users = await user.find().select(['username', 'userEmpId', 'userRole', 'isActive', 'userProfile', 'lastSeen']);

        // Enrich teams with member details
        const updatedTeams = type == 'GetBydeveloper' ? getteams.map((team) => {
            const members = team.empIds.map((empId) => {
                return users.find((u) => u.userEmpId.toString() === empId);
            });

            return {
                ...team._doc,
                members,
            };
        }) : teams.map((team) => {
            const members = team.empIds.map((empId) => {
                return users.find((u) => u.userEmpId.toString() === empId);
            });

            return {
                ...team._doc,
                members,
            };
        });
        console.log(updatedTeams, 'updatedTeams');

        return res.status(200).json({
            status: true,
            Teamdata: updatedTeams,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "server error" });
    }
};
module.exports = { MakeTeams, getAllTeams }