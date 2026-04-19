// import AddmemberList from "../components/AddmemberList"
import CreateTeam from "../components/CreateTeam"
import Navbar from "../components/Navbar"

function TeamMembersManagemenet() {
  return (
    <>
      <div>

        <Navbar page="Team Member Management" />

        <div className="mt-13">
          <CreateTeam></CreateTeam>
          {/* <AddmemberList></AddmemberList> */}
        </div>
      </div>


    </>
  )
}

export default TeamMembersManagemenet