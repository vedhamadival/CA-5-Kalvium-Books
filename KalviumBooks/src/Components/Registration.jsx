import { useState } from 'react'
import { Link,} from 'react-router-dom'
import { useForm} from 'react-hook-form'
function Registration() {

  const [Field , setField] = useState({
    Name:'',
    Email:'',
    Password:'',
    RePassword:''
  })

  const {register , handleSubmit, watch, formState:{errors}} = useForm();

  const [Submitted,setSubmitted] = useState(false)
  const [Validate , setValidate] = useState(false)


  const onSubmit = (data) =>{
    setField(data);
    setSubmitted(true);
    console.log(data);
  }

  return (
    <>
     <div id="header">
        <div id="head">
            <div id="logo">
            <img src='../Assets/Group 1.png' height='50px'/>
            </div>
            <div id="logo-name">
            <h1>Kalvium Books</h1>
            </div>
            <div id="back">
           <Link to='/Books'><button>Return to Home</button></Link>
        </div>
        </div>
      </div>
      <hr/>
     
    <div id="Form-Container">
    <h1 id="h1">CREATE ACCOUNT</h1>
        <div id="Form">

            <form onSubmit={handleSubmit(onSubmit)}>
              {Submitted?<span id="Message">Registered Successfully!!!</span>:null}
                <input type="text" placeholder='Your Name'{...register("Name" , {required:"Please Enter your Name" ,

                minLength:{
                  value: 3,
                  message: 'Name should be at least 3 characters'
                },
                maxLength:{
                  value: 30,
                  message: 'Name should not exceed 30 characters'
}})}/>
                 {errors.Name && <span>{errors.Name.message}</span>}



                <input type="text" placeholder='Your Email' {...register("Email" , {required:"Please Enter your Email" , 

                pattern:{
                 value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                 message:"Invalid Email use'@"
                }             
})}/>
                {errors.Email && <span>{errors.Email.message}</span>}



                <input type="password" placeholder='Password'  {...register("Password" , {required:"Please Enter your Password" ,

                minLength:{
                  value: 10,
                  message: 'Password should be at Least 10 characters'
                }

})}/>
                {errors.Password && <span>{errors.Password.message}</span>}


                <input type="password" placeholder='Confirm Password'  {...register("RePassword" , {required:"Please Re-Enter your Password" , 
                validate: (value)=>value === watch('Password') || 'Passwords do not match'
              })}/>
                {errors['RePassword']&& <span>{errors['RePassword'].message}</span>}

                <button id="submit" type="submit">SIGN UP</button>
            </form>
           
        </div>
        
    </div>
    </>
  )
}

export default Registration
