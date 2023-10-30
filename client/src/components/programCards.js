import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRunning, faDumbbell, faHandBackFist, faHeart } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'


const ProgramCards = () => {

   


    return (
        <>
            <div className="card-container-for-programs" id='card'>
                    <div className="card-box-for-programs ">
                        
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faPersonRunning} className='icon'/>Weight Loss</span>
                        <p>
                            Weight loss program means any program designed to aid consumers in weight loss or weight maintenance.
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faHandBackFist} className='icon'/>
                            Increase Strength
                        </span>
                        <p>
                            Different forms of resistance training include using free weights, weight machines, resistance bands and your own body weight.
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faDumbbell} className='icon'/>
                            Build Muscle
                        </span>
                        <p>
                            Different forms of resistance training include using free weights, weight machines, resistance bands and your own body weight. 
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>    
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faDumbbell} className='icon'/>
                            Tone and Firm
                        </span>
                        <p>
                        Toning exercises are physical exercises that are used with the aim of developing a physique with a large emphasis on musculature.
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>    
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faHeart} className='icon'/>
                            Cardio Exercises
                        </span>
                        <p>
                            Cardio is a killer form of exercise that comes with a host of health benefits, including blood sugar regulation, improved mood, and better brain power.                         
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>    
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faDumbbell} className='icon'/>
                            Build Muscle
                        </span>
                        <p>
                            Different forms of resistance training include using free weights, weight machines, resistance bands and your own body weight. 
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>    
                 
                </div>

        </>
    )
}
export default ProgramCards;