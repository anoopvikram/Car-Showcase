import {useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export const Home = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(()=>{
        const startValue = isMobile? 'top 50%' : 'center 60%';
        const endValue = isMobile? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () =>{
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, []);

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

        <div className='video'>
            <video 
                src="/videos/output.mp4" 
                ref={videoRef}
                muted
                playsInline
                preload='auto'
                
            />
        </div>
    </>
  )
}
