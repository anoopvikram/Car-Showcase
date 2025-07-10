import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { SplitText } from 'gsap/all'

export const Spec = () => {
  

  useGSAP(()=>{

    const paraSplit = new SplitText('.spec-desc p', {type: 'lines'})

    gsap.to('.spec-value h2',{
      scale: 1.1,
      duration: .3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 3,
      delay: 1,
      scrollTrigger:{
        trigger: '#spec',
        start: 'top 60%',
      }
    })

    gsap.from(paraSplit.lines,{
      opacity: 0,
      yPercent: 200,
      ease: 'power1.inOut',
      duration: 1.5,
      stagger: 0.05,
      delay: .5,
      scrollTrigger:{
        trigger: '#spec',
        start: 'top 50%'
      }
    })

    gsap.to('.cover-text',{
      opacity:1,
      duration: .5,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
      scrollTrigger:{
        trigger: '#spec',
        start: 'top 20%',
        toggleActions: 'restart none restart none'
      }
    })
  }
  )
  return (
    <section id="spec">
      <div className="cover"><p className='cover-text'>SPECIFICS</p></div>
      <div className="spec-container">

        <div className="power spec-item">
          <h2>Max Power</h2>
          <div className="spec-value">
            <h2>320</h2>
            <p>HP</p>
          </div>
        </div>
              
        <div className="speed spec-item">
          <h2>Max Speed</h2>
          <div className="spec-value">
            <h2>240</h2>
            <p>km/h</p>
          </div>
        </div>

        <div className="hundred spec-item">
          <h2>0-100 km/h</h2>
          <div className="spec-value">
            <h2>4.8</h2>
            <p>S</p>
          </div>
        </div>


      </div>

      <div className="desc spec-desc">
        <p>The Volvo P1800 Restomod PL runs a 2.0L turbocharged inline-4, producing 320 HP and hitting 0-100 km/h in 4.8 seconds. A 6-speed manual transmission, adjustable suspension, and ventilated disc brakes deliver sharp, confident performance. Inside, hand-stitched leather, a digital cluster, and custom details combine vintage charm with modern tech.</p>
      </div>

      <div className="main">
          <h2>P1800</h2>
          <div className="sub">
              <p className="sub-one">CLASSIC</p>
              <p className="sub-two">RESTOMOD</p>
          </div>
      </div>

      <div className="banner">
        <p>Timeless</p>
        <p>Powerful</p>
        <p>Refined</p>
        <p>Iconic</p>
        <p>Modernized</p>
        <p>Elegant</p>
        <p>Bold</p>
        <p>Precise</p>
      </div>

    </section>
  )
}
