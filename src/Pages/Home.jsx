import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export const Home = () => {

    useGSAP(()=>{
            gsap.from('.title-head', {
                yPercent: -100,
                opacity: 0,
                ease: 'power1.inOut',
                duration: .8,
            })

            gsap.from('.title-desc', {
                yPercent: 100,
                opacity: 0,
                ease: 'power1.inOut',
                duration: .8,       
            })

            gsap.from('.side-head',{
                xPercent: -50,
                duration: .8,
                ease: 'power1.inOut',
                delay:.5
            })

            gsap.from('.side-content',{
                yPercent: -200,
                opacity: 0,
                ease: 'power1.inOut',
                duration: .8, 
                delay: 1,                   
            })

            gsap.from('.subtitle',{
                xPercent: 200,
                opacity: 0,
                ease: 'power1.inOut',
                duration: 1, 
                                  
            })

            gsap.timeline({
                scrollTrigger:{
                    trigger: '#home',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            })
            .to('.side-content',{y: -200}, 0)
            .to('.side-head', {x: -150}, 0)
            .to('.subtitle', {x:200},0)
    })
   
  return (
    <>
        <section id="home">
            <div className='title'>
                <h1 className='title-head'>DISCOVER</h1>
                <p className='title-desc'>The perfect blend of heritage, craftsmanship, and innovation</p>
            </div>

            <div className='subtitle'>
                <h2>Introducing</h2>
                <p>the Volvo  Restomod PL.
                    A legendary classic reimagined with modern performance and bold design upgrades.
                </p>
            </div>

            <div className='side'>
                <h2 className='side-head'>P1800</h2>
                <div className='side-content'>
                    <p>Timeless</p>
                    <p>Powerful</p>
                    <p>Refined</p>
                    <p>Iconic</p>
                </div>
            </div>
        </section>
    </>
  )
}
