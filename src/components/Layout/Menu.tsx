import Security from '../Sections/Security/Security'
import Help from '../Sections/Help/Help'
import Possible from '../Sections/Possibility/Possibility'
import Hero from '../Sections/Hero/Hero'
import Gemini from '../Sections/Gemini/Gemini'
import Advantage from '../Sections/Advantage/Advantage'
import RecommendCard from '../Sections/RecommendCard/RecommendCard'
import Packet from '../Sections/Packet/Packet'
import Next from '../Sections/Next/Next'

export default function Menu() {
    return (
        <>
            <Hero />
            <Gemini />
            <Security />
            <Help />
            <Possible />
            <Advantage />
            <RecommendCard />
            <Packet />
            <Next />
        </>
    )
}