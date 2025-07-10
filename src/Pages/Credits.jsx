import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const Credits = () => {

  // useGSAP(()=>{
  //   gsap.from('.credit',{
  //     opacity: 0,
  //     yPercent: 100,
  //     ease: 'power1.inOut',
  //     duration: .8,
  //     scrollTrigger:{
  //       trigger: '#credits',
  //       start: 'top 20%'
  //     }
  //   })
  // })
  return (
    <section id="credits">
      <div className="credit">
        <h2 className='head'>CREDITS</h2>
        <p>Designed and developed by <a href="https://anoop-portfolio-orcin.vercel.app/" target="_blank" rel="noopener noreferrer">Anoop Vikram</a></p>

        <h2>Tools & Technologies</h2>
        <ul>
            <li>React.js, Tailwind CSS, GSAP, Vite</li>
            <li>Blender, FFmpeg, Vercel</li>
        </ul>

         <h2>Assets & Resources</h2>
        <ul>
            <li>Fonts: Anton, Antonio via <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a></li>
            <li>3D Model: <a href="https://www.blenderkit.com/" target="_blank" rel="noopener noreferrer">BlenderKit</a></li>
            <li>Tutorial: <a href="https://www.youtube.com/@javascriptmastery" target="_blank" rel="noopener noreferrer">JavaScript Mastery</a></li>
        </ul>

        <h2>Open Source Libraries</h2>
        <ul className='libraries'>
            <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React.js</a></li>
            <li><a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer">GSAP</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
        </ul>

        <p className="note">Thanks to everyone who supported and inspired this project.</p>
      </div>
    </section>
  )
}
