import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export const About = () => {

    useGSAP(()=>{
        gsap.from('.design h2',{
            xPercent: 100,
            ease: 'power1.inOut',
            duration: .8,
            stagger: .1,
            scrollTrigger:{
                trigger: '#about',
                start: 'top 80%',
            }
        })

        gsap.from('.about-main',{
            xPercent: -100,
            ease: 'power1.inOut',
            duration: .8,
            stagger: .1,
            scrollTrigger:{
                trigger: '#about',
                start: 'top 80%',
            }
        })

        gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'bottom 90%',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.design h2',{x:200, stagger: .1}, 0)

    })
  return (
    <section id="about">
        <div className="main about-main">
            <h2>P1800</h2>
            <div className="sub">
                <p className="sub-one">CLASSIC</p>
                <p className="sub-two">RESTOMOD</p>
            </div>
        </div>
        
        <div className="about">
            <h2>About</h2>
            <p className="desc-one text-shadow">The Volvo P1800 Restomod PL takes a legendary classic and upgrades it for the modern road.</p>
            <p className="desc-two">Every detail has been reimagined from enhanced performance to custom craftsmanship; while preserving the unmistakable soul of the original.</p>
        </div>

        <div className="design">
            <h2>P1800</h2>
            <h2>P1800</h2>
            <h2>P1800</h2>
            <h2>P1800</h2>
            
        </div>
    </section>
  )
}
