import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all"
import { Home } from './Pages/Home';
import { Navbar } from './components/Navbar';
import { About } from './Pages/About';
import { Spec } from './Pages/Spec';
import { Contact } from './Pages/Contact';
import VideoBackground from './components/VideoBackground';


gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
  return (
    <main>
      <VideoBackground />
      <Navbar/>
      <Home/>
      <About/>
      <Spec/>
      <Contact/>
    </main>
  )
}
