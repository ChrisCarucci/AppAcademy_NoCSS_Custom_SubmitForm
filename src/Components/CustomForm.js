
import { useState, useEffect} from 'react'



function CustomForm() {

    const [phoneType, setPhoneType] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])
    const [staff, setStaff] = useState(false)
    const [student, setStudent] = useState(false)
    const [isChecked, setIsChecked] = useState(false)



    const onSubmit = e => {
        e.preventDefault();
        setHasSubmitted(true)


        if (validationErrors.length > 0) {
            return alert("Errors in the form!")
        }
        
    

    const formInfo = {
        phoneType,
        phone,
        name,
        email,
        bio,
        student: student,
        staff: staff,
        hasSubmitted: hasSubmitted,
        isChecked: isChecked,
        submittedOn: new Date()
    }

    console.log(formInfo)

    };
    

    useEffect(() => {
        const errors = [];

        if (name.length < 1) {
          errors.push("Please enter your name..")
        }
    
        if (!email.includes("@")) {
          errors.push("Please enter a valid email..")
        }

        if (phone !== "undefined") {

            var pattern = new RegExp(/^[0-9\b]+$/);
          
            if (!pattern.test(phone)) {
          
              errors.push("Please enter only number.")
          
            }else if(phone.length !== 10){

              errors.push("Please enter valid phone number.")
          
            }}

        setValidationErrors(errors)
      }, [name, email, phone])


      const checkHandler = () => {
        setIsChecked(!isChecked)
      }

      const studentHandler = () => {
        setStudent(!student)
      }

      const staffHandler = () => {
        setStaff(!staff)
      }


    return (
        <form onSubmit={onSubmit}>
            {hasSubmitted && validationErrors.length > 0 && (
           <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => {
                return <li key={error}>{error}</li>;
              })}
            </ul>
           </div>
            )}
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                type="text" 
                placeholder='Name..' 
                id='name'
                onChange={(e => setName(e.target.value))} 
                value={name}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                type='text' 
                placeholder='Email..' 
                id='email' 
                onChange={(e => setEmail(e.target.value))} 
                value={email}/>
            </div>
            <div>
                <label htmlFor='phone'>Phone:</label>
                <input
                    id='phone'
                    type='text'
                    placeholder="Phone.."
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                />
                <select
                    name='phoneType'
                    onChange={e => setPhoneType(e.target.value)}
                    value={phoneType}
                >
                    <option value='' disabled>
                    Select a phone type...
                    </option>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Mobile</option>
                </select>
            </div>
            <div>
                <label htmlFor='bio'>Bio:</label>
                <textarea
                    id='bio'
                    maxLength="280"
                    name='bio'
                    placeholder='Enter a brief bio here..'
                    onChange={e => setBio(e.target.value)}
                    value={bio}
                />
            </div>
            <div>
                <input 
                    type='radio' 
                    id='staff' 
                    name='radioButton'
                    onChange={staffHandler}
                    value={staff}
                ></input>
                <label htmlFor="html">Staff</label><br></br>
                <input 
                    type='radio' 
                    id='student' 
                    name='radioButton'
                    onChange={studentHandler}
                    value={student}
                ></input>
                <label htmlFor="student">Student</label><br></br>
            </div>
            <div>
              <label htmlFor='checkbox'>Signup For Notifications? </label>
                <input 
                    type='checkbox' 
                    id='checkbox'
                    name='checkbox'
                    onChange={checkHandler}
                    value={isChecked}
                ></input>
            </div>
            <button>Submit</button>
        </form>
    )};


export default CustomForm;