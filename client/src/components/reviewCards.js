import image1 from "../assets/images/reviewImage1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCards = () => {
    
    return (
        <>


            
            <div className="reviewsContainer">
                <div className="customerIndivCard">
                    <div className="customerProfile center ">
                        <img src={image1} alt='man' className='customer profile center'/>
                        <span className="yellow"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faQuoteLeft}className="qouteicons"/></span><br/>
                        <span className="clientname">Ken Chan</span>
                    </div>
                    <div>
                        <p>This program greatly help me achieve my fitness goal. My personal trainer was very dedicated with his job and has always encouraged me to achieve my goals. If you want achieve your fitness goal, you should join this program now!  <FontAwesomeIcon icon={faQuoteRight} className="qouteicons"/></p>
                    
                    </div>
                </div>
                <div className="customerIndivCard">
                    <div className="customerProfile center ">
                        <img src={image1} alt='man' className='customer profile center'/>
                        <span className="yellow"><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></span>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faQuoteLeft}className="qouteicons"/></span><br/>
                        <span className="clientname">John Smith</span>
                    </div>
                    <div>
                        <p>
                            Fitnity has greatly hel me with my fitness goals. Thank you so much for the encouragemet of the coach and for his consistent training. It's crazy how fast I swee the improvements in just a few weeks. I should encourage my family members to register as well. 
                            <FontAwesomeIcon icon={faQuoteRight} className="qouteicons"/>
                        </p>
                    
                    </div>
                </div>
                
    
                
               
                 
                
            </div>
            
        
            
        </>
    )
}
export default ReviewCards