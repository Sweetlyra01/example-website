import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ProgramCards from './programCards';
const OurProgram = () => {
    return (
        <>
            <div className="ourProgram-section">
                <div>
                    <span className='sub-heading-text'>Programs We Offer</span>
                </div>
                <div>
                    <ProgramCards/>
                </div>
                

                <Link to="/program"><button className='view-more-btn'>View More <FontAwesomeIcon icon={faArrowRight} className='arrow'/></button></Link>            

            </div>
        </>
    )
}
export default OurProgram;