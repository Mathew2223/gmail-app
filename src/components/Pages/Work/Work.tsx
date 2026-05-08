import Footer from "../../Layout/Footer";
import Instruments from "./Instruments/Instruments";
import IntroduceGemini from "./IntroduceGemini/IntroduceGemini";
import Nav from "./Nav/Nav";
import Pricing from "./Pricing/Pricing";
import Safe from "./SafeService/Safe";
import Service from "./Service/Service";
import Trust from "./Trust/Trust";
import WorkHeader from "./WorkHeader/WorkHeader";

export default function Work() {
    return (
        <>
            <WorkHeader />
            <main style={{ paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
                <Service />
                <Nav />
                <IntroduceGemini />
                <Instruments />
                <Safe />
                <Pricing />
                <Trust />
            </main>
            <Footer />
        </>
    )
}