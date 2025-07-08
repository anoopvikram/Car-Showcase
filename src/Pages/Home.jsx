import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export const Home = () => {
   
  return (
    <>
        <section id="home">
            <div className='title'>
                <h1>DISCOVER</h1>
                <p>The perfect blend of heritage, craftsmanship, and innovation</p>
            </div>

            <div className='subtitle'>
                <h2>Introducing</h2>
                <p>the Volvo  Restomod PL.
                    A legendary classic reimagined with modern performance and bold design upgrades.
                </p>
            </div>

            <div className='side'>
                <h2>P1800</h2>
                <div>
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
