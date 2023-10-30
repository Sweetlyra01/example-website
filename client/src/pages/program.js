import ProgramCards from "../components/programCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import programImg from "../assets/images/programs-hero-img.png";
import { Link } from 'react-router-dom';


const Program = () => {
    return (
        <>  
               <div className="program-hero-sec">
                    <img src={programImg} alt='Program'/>
                   
                </div>
                <div className="program-overlay">
                    <span>Our Programs</span>
                </div>
            <div className="black">
                <ProgramCards/>
                <div className="flex">
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faHandBackFist} className='icon'/>
                            Flexibility exercise
                        </span>
                        <p>
                            Activities that improve the ability of a joint to maintain the movement necessary for carrying out daily tasks and physical activity.                       
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>
                    <div className="card-box-for-programs ">
                        <span className='font-size-highlight'> <FontAwesomeIcon icon={faHandBackFist} className='icon'/>
                            Endurance conditioning
                        </span>
                        <p>
                            This exercise is an activity that increases your heart rate and breath for an extended period. 
                        </p>
                        <Link to="/join"><button className='join-now-btn'>Join Now</button></Link>
                    </div>
                </div>

                
            </div>
   
        </>
    )
};
export default Program;