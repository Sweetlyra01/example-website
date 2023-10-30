import JoinUsSec from "../components/whyJoinUs";
import Accordion from 'react-bootstrap/Accordion';
import { useState} from 'react';
import Axios from "axios";
import aboutImg from "../assets/images/about-hero.png"

const About = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ comment, setComment ] = useState("");

    const data = {
        email: email,
        name: name,
        comment: comment


    }

    //send ClientMessage to database
    const sendMessage = () => {
        Axios.post("http://localhost:3001/clientreviews/add", data).then(() => {
            console.log("Data added succesfully");
        })
        
        setName("");
    }


    return (
        <>
            <div className="AboutUsSection">
                <div className="about-hero-sec">
                    <img src={aboutImg} alt='Program'/>
                   
                </div>
                <div className="about-overlay">
                    <span>About Us</span>
                </div>
                <JoinUsSec/>
                <div className="about-us-par">
                    <p>
                        Welcome to our gym fitness website! We are dedicated to helping you achieve your fitness goals and lead a healthy lifestyle. Here is a little about us:

                        At Fitfinity, we believe that fitness is not just a hobby, but a way of life. With our state-of-the-art facilities and experienced trainers, we provide a welcoming and inclusive environment where individuals of all fitness levels can thrive. 
                        Our team of certified trainers are not only passionate about fitness, but also highly knowledgeable, experienced, and dedicated to helping you succeed. They will guide you through personalized training programs, ensuring you remain motivated and focused on achieving your desired outcomes.
                    </p>
                    <p>
                        Our mission is to empower you to reach your full potential, both mentally and physically. Whether you are a beginner looking to kickstart your fitness journey or an experienced athlete aiming to enhance your performance, we have a wide range of programs and services tailored to meet your unique needs.
                        What sets us apart is our commitment to delivering exceptional results.
                    </p>
                    <p>
                        In addition to our top-notch equipment and expert guidance, we offer various group classes that cater to different interests, including high-intensity interval training, yoga, Pilates, and more. These classes are designed to not only challenge and motivate you but also create a sense of community and camaraderie among our members.
                        Your safety and comfort are of utmost importance to us. We maintain a clean and sanitized environment, strictly following all necessary health and safety protocols. Furthermore, our friendly staff is always available to assist you, answer any questions, and provide ongoing support on your fitness journey.
                    </p>
                    <p>
                        Join us at Fitfinity and take the first step towards a healthier, fitter you. Take advantage of our flexible membership options and join a community that is driven by the same desire for a healthier lifestyle. We are excited to be part of your fitness journey and help you transform your life for the better.
                        Remember, your fitness goals are within reach - let us be your partner on this incredible journey. 
                    </p>
                </div> 
            </div>
            
            <div >
                <div className="AboutUsSection">
                    <h1 className="center about-us-text">Frequent Ask Questions</h1>
                    <div className="center faq">
                        <Accordion defaultActiveKey="0" flush >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What are the membership options available?</Accordion.Header>
                                <Accordion.Body>
                                    We offer a variety of flexible membership options to suit your needs. Whether you prefer a basic, weekly, or monthly membership, we have a package that fits your schedule and budget.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Do you provide personalized training programs?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we are proud to offer personalized training programs tailored to your specific goals and fitness level. Our certified trainers will work closely with you to create a program that suits your individual needs and ensures optimal results.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Are there group fitness classes available?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we have a wide range of group fitness classes available for all interests and fitness levels. From energetic HIIT sessions to relaxing yoga classes, our group fitness options provide a fun and social way to achieve your fitness goals.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                    Is personal training available for beginners?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Absolutely! Our personal trainers have extensive experience working with beginners and will provide the guidance and support necessary to help you build a solid foundation and progress at a pace that is comfortable for you.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    Can I put my membership on hold if needed?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we understand that sometimes life circumstances may require you to pause your membership. We offer the option to put your membership on hold for a short period of time. Please contact our customer service for more information.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    Are there any additional services or benefits included in the membership?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, as a member, you will have access to various additional services and benefits, such as nutritional guidance, fitness assessments, exclusive member events, and discounts on personal training sessions or merchandise.
                                </Accordion.Body>

                            </Accordion.Item>
                    </Accordion>
                    </div>

                </div>
                <div className="sphere">
                    <div className="message-par">
                        <span>
                            If you have any other questions or require further information, please do not hesitate to reach out to our friendly staff. We are here to assist you on your fitness journey!
                        </span>
                    </div>
                    <div>
                        <h5>Send Us a message for more inquiries... </h5>
                        <form action="#" className="reviewsForm">
                            <input type="text" placeholder="Name:" id='clientName' className="input" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="email" placeholder="Email:" id='clientComment' className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div>
                                <textarea placeholder="Message:" id='clientComment' className="message-box"  value={comment} onChange={(e) => setComment(e.target.value)}>Message:</textarea> 
                            </div>           
                            <div>
                                <button onClick={sendMessage} className="send-btn">Send</button>
                            </div>
                        </form>
                    </div>
            </div>
            </div>
           
        </>
    )
};
export default About;