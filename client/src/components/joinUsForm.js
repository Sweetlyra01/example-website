// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect} from 'react'
import Axios from "axios";
// import { mobileValidation } from './regEx';
// import { emailValidation } from './regEx';

const JoinUsForm = () => {

const [ name, setName ] = useState("");
const [ clientLastname, setLastName ] = useState("");
const [ email, setEmail ] = useState("");
const [ mobile, setMobile ] = useState("");
const [ program, setProgram ] = useState("");
const [ clientList, setClientList ] = useState([]);

const data = {
    clientName: name,
    clientLastname: clientLastname,
    email: email,
    contactNum: mobile,
    preferredProgram: program
}

//get data from url/server
useEffect(() => {   
    Axios.get("http://localhost:3001/fitfityclientsprogram").then((response) => {
        setClientList(response.data);
        // console.log(response.data)
    })
}, [clientList])
    
//send data to the server
const addMembership = () => {
//   if (mobileValidation.test.contactNum) {
    let added= window.confirm("Your Registration is Submitted Succesfully!");
    if (added) {
        Axios.post("http://localhost:3001/fitfityclientsprogram/add", data).then(() => {
            console.log("Data added succesfully");
        })
        // setName("");
        // setLastName("");
        // setEmail("");
        // setMobile("");
        // setProgram("");
    }
//   } else {
//     alert("Please enter a valid number.")
//   }
}



    return (
        <>
        <div className='joinUsFormSection'>
            <form className="form" action='#'>
                <h2>Join FitFinity Now!</h2>
                <span>Registration Form</span>
                <div className='flex'>
                    <div className='nameContainer'>
                        <input type="text" placeholder="Name:" id='clientName' required className="input" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder="Last Name:" id='clientLastName' required className="input" value={clientLastname} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mobileContainer'>
                        <input type="number" placeholder="Enter Number" id='clientNumber' required className="input" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                        <input type="email" placeholder="Email:" id='clientEmail' required className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        
                    </div>
                </div>
                <span>Programs you are interested in:</span>
                {/* <div className='column'>
                        <input type='checkbox' id='program1'/>
                        <label for="program1"> Flexibility exercise</label>
                        <input type='checkbox' id='program1'/>
                        <label for="program1"> Endurance conditioning</label>
                        <input type='checkbox' id='program1'/>
                        <label for="program1"> Increase Strength</label>
                    </div> */}
                <div className='programContainer'>
                <span >Select Plan: </span>
                <select value={program} onChange={(e) => setProgram(e.target.value)}>
                    <option></option>
                    <option>Basic Plan</option>
                    <option>Weekly Plan</option>
                    <option>Yearly Plan</option>

                </select>
                    {/* <input type='text'  value={program} onChange={(e) => setProgram(e.target.value)} /> */}
                    
                </div>
                <button className='submitRegBtn' onClick={addMembership}> Register</button>

            </form>

        </div>
                
        </>
    )
}
export default JoinUsForm