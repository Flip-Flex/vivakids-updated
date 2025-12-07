import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Philosophy from '../components/Home/Philosophy';
import UniqueEdge from '../components/Home/UniqueEdge';
import Infrastructure from '../components/Home/Infrastructure';
import Programs from '../components/Home/Programs';
import Achievements from '../components/Home/Achievements';
import Founder from '../components/Home/Founder';
import Contact from '../components/Home/Contact';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <About />
            <Philosophy />
            <UniqueEdge />
            <Infrastructure />
            <Programs />
            <Achievements />
            <Founder />
            <Contact />
        </div>
    );
};

export default Home;
