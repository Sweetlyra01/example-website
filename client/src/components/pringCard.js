import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const PricingCard = () => {
    return (
        <>
            <div  className="pricing-container wrap">
                <div className="pricingCard">
                    <div>
                        <h3>Basic Plan</h3>
                        <h2>P600.00</h2>
                        <span>________________________________________</span>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Smart workout plan
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Group training with Coach.
                        </p>
                    </div>
                    <div>
                        <button className='join-now-btn'>Join Now</button>
                    </div>
                </div>
                <div className="pricingCard">
                    <div>
                        <h3>Weekly Plan</h3>
                        <h2>P2,500.00</h2>
                        <span>________________________________________</span>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Smart workout plan
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> PRO Classes
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Personal Trainor
                        </p>
                    </div>
                    <div>
                        <button className='join-now-btn'>Join Now</button>
                    </div>
                </div>
                <div className="pricingCard">
                    <div>
                        <h3>Basic Plan</h3>
                        <h2>P6,000.00</h2>
                        <span>________________________________________</span>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Smart workout plan
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> ELITE Classes
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleCheck} className='circle-icon'/> Group training with Coach.
                        </p>
                    </div>
                    <div>
                        <button className='join-now-btn'>Join Now</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default PricingCard 