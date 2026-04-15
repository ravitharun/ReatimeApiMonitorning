import Sucessapigraph from '../components/Sucessapigraph'
import ErrorRateGraph from '../components/ErrorRateGraph'

function Graph() {

    return (<>
        <div className="flex flex-col md:flex-row gap-5 mt-10">

            <Sucessapigraph Geaphname="Requests Per Second" descprition="Real-time API traffic" />

            <ErrorRateGraph Geaphname="Error Rate" descprition="Real-time   API Error  Rate" />
        </div>
    </>)
}

export default Graph