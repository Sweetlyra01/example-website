import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faClock, faBarsProgress } from '@fortawesome/free-solid-svg-icons'

import img4 from "../assets/images/image4.png"

const JoinUsSec = () => {
    return(
        <>
            <div className="JoinUsSec black">
                <h1>Why Join Us...</h1>
                <img src={img4} alt="exercise group"/>
                <div className="container-for-why-join-us">
                    <div className="card-why-join-us">
                        <FontAwesomeIcon icon={faUserTie} className='icon'/>
                        <span>GUIDED BY A COACH</span>
                        <div> 
                            <p> 
                                Unlock your potential with our expert coachs/personal trainers.Your coach will adjust the workouts to be appropriately challenging for you. 
                            </p>
                        </div>
                    </div>
                    <div className="card-why-join-us">
                        <FontAwesomeIcon icon={faClock} className='icon'/>
                        <span>CONSTANT WORKOUT</span>
                        <div row> 
                            <p>Elevate your fitness with our our constant workout sessions.</p>
                            <p>Elevate your fitness with our our constant workout sessions.</p>

                        </div>
                    </div>
                    <div className="card-why-join-us">
                        <FontAwesomeIcon icon={faBarsProgress} className='icon'/>
                        <span>GOOD MANAGEMENT</span>
                        <div row> 
                            <p>Good management to reach your fitness goals.</p>
                            <p>Good management to reach your fitness goals.</p>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default JoinUsSec;