import Navbar from '../components/Navbar'
import ApiPerfomance from './ApiPerfomance'
import RecentApilogs from './RecentApilogs'

function Logs() {

    return (
        <>

            <Navbar page='Logs' ></Navbar>
            <ApiPerfomance></ApiPerfomance>
            <RecentApilogs></RecentApilogs>
        </>
    )
}

export default Logs