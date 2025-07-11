import {navLinks} from "../../constants/index"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export const Navbar = () => {

    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'main',
                start: "top+=1 top",
                end: 'top top',
                toggleActions: 'play none none reverse'
            }
        });

        navTween.fromTo('nav',
            {backgroundColor: 'transparent'},
            {
                backgroundColor: '#00000050', 
                backdropFilter: 'blur(10px)',
                border: '1px solid #333',
                duration: .7,
                ease: 'power1.inOut'
            })
    })
  return (
    <nav>
        <div>
            <a href="#home" className=''>
                <p>VOLVO</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
