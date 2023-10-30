
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect} from 'react'
import Axios from "axios"

const AdminSide = () => {

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
};

//get data from url/server
useEffect(() => {
    Axios.get("http://localhost:3001/fitfityclientsprogram").then((response) => {
        setClientList(response.data);
        // console.log(response.data)
    })
}, [clientList])
    
//send data to the server
const addMembership = () => {
    Axios.post("http://localhost:3001/fitfityclientsprogram/add", data).then(() => {
        console.log("Data added succesfully");
        alert("Registration added Succesfully!");
    })
    setName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setProgram("");

}

//delete data
const deleteMember = (id) => {
    let answer = window.confirm("Are you sure you want to delete this client's information?");
    if (answer){
    Axios.delete(`http://localhost:3001/fitfityclientsprogram/delete/${id}`)
    setClientList(clientList.filter((item) => {
        return item.id !== id;
    }))
}
}

    return (
        <>
            <div className='adminSide'>
                <h2>Fitfinity Members</h2>
                    <form action='#'>
                                <input type="text" placeholder="Name:" id='clientName' className="input" value={name} onChange={(e) => setName(e.target.value)}/>
                                <input type="text" placeholder="Last Name:" id='clientLastName' className="input" value={clientLastname} onChange={(e) => setLastName(e.target.value)}/>

                                <input type="number" placeholder="Enter Number" id='clientNumber' className="input" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                                <input type="email" placeholder="Email:" id='clientEmail' className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>

                            <span>Select Plan: </span>
                        <select value={program} onChange={(e) => setProgram(e.target.value)}>
                            <option></option>
                            <option>Basic Plan</option>
                            <option>Weekly Plan</option>
                            <option>Yearly Plan</option>

                        </select>
        
                        <button className='submitRegBtn' onClick={addMembership}> Register</button>

                    </form>

                    {/* To Display Data */}
                <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>Contact Number</td>
                            <td>Program</td>
                            <td colSpan={2}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {clientList.map((item) => {
                            return (
                                <tr id={item.id} key={item.id}>
                                    <td>{item.clientName}</td>
                                    <td>{item.clientLastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contactNum}</td>
                                    <td>{item.preferredProgram}</td>
                                    <td>
                                        <button className='deleteBtn' onClick={() => deleteMember(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            </div>
         
        </>
    )
}
export default AdminSide;