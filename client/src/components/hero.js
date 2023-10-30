import Carousel from 'react-bootstrap/Carousel'
import img1 from "../assets/images/image1.png"
import img2 from "../assets/images/image2.png"
import img3 from "../assets/images/image3.png"
const Hero = () => {
    return (
        <>  
            <div className="hero-section" id='hero'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src={img1} alt='man'className='carousel-img'/>
                        <div className='carousel-caption'>
                            <Carousel.Caption>
                            <span className='heading'>Be <small className='highlight'>HEALTHY</small> <br/>
                            With <small className='highlight'>FitFinity</small></span>
                            <a href='/program'><button className='get-started-btn'>Get Started</button></a>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img2} alt='man' className='carousel-img'/>
                        <div className='carousel-caption'>
                            <Carousel.Caption>
                            <span className='heading'>Strive <small className='highlight'> PROGRESS</small>, Not <small className='highlight'> PERFECTION</small>.</span><br/>
                            <button className='get-started-btn'>Get Started</button>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={img3} alt='man' className='carousel-img'/>
                        <div className='carousel-caption'>
                            <Carousel.Caption>
                            <span className='heading'>Don't <small className='highlight'>SIT</small>, Get <small className='highlight'>FIT</small>.</span><br/>
                            <button className='get-started-btn'>Get Started</button>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Hero;