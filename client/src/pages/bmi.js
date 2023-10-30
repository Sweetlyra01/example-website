import React, {useState} from 'react'


function Bmi() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('Normal')
      } else {
        setMessage('You are overweight')
      }
    }
  }




  let reload = () => {
    window.location.reload()
  }

  return (
    <>
        <div className='black'>
            <h2 className='center'>BMI Calculator</h2>
            <div className="bmiPage">
            
                <div className='bmi-cal-container'>
                    <div>
                        <span>1 kg =  2.204 lbs</span><br/>
                        <span>1 foot = 12 inches</span>
                    </div>
                    <form onSubmit={calcBmi}>
                        <div className='bmi-input'>
                            <label>Weight (lbs)</label>
                            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                        </div>  
                        <div className='bmi-input'>
                            <label>Height (in ) </label>
                            <input value={height} onChange={(event) => setHeight(event.target.value)} />
                        </div>
                        <div>
                            <button className='bmi-submit-btn' type='submit'>Submit</button>
                            <button className='reset-btn' onClick={reload} type='submit'>Reset</button>
                        </div>
                    </form>

                    <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                    </div>
                </div>  
            </div>
        </div>
    </>
  );
}

export default Bmi;