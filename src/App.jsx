import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all"
import { Home } from './Pages/Home';
import { Navbar } from './components/Navbar';
import { About } from './Pages/About';


gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
    </main>
  )
}
