// import { useState } from 'react';
// import { Link} from 'react-router-dom';
// import "../css/Login.css"



// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

  

//   const handleformSubmit = async (e) => {
//     e.preventDefault();

//     // Email validation: Check if the email is in a valid format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     // Password validation: Ensure that the password has a minimum length
//     if (password.length < 6) {
//       setErrorMessage('Password should be at least 6 characters long.');
//       return;
//     }
//   };

//   return (
//     <div className="full">
//       <div className="outer" id="login-full">
//         <h1 id="title"></h1>
//         <h1 id="head">LOGIN</h1>
//         <div className="fields">
//           <label htmlFor="email">User email</label>
//           <br/>
//           <input
//             id="email"
//             label='user'
//             type="email"
//             required
//             placeholder="Enter your email here"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <br/>
//           <br/>

//           <label htmlFor="password">Password</label>
//           <br/>
//           <input
//             id="password"
//             type="password"
//             required
//             placeholder="Enter your password here"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br></br>
//           <br></br>

//           {errorMessage && <p className="error-message">{errorMessage}</p>}

//           <button id="submit" onClick={handleformSubmit} type="submit">
//             <Link to='/home'>Login</Link>
//           </button>

//           <h4 id="lower">
//             Dont have an account? <Link to='/reg'>Register</Link>
//           </h4>
//           <h4>
//             <Link to='/adminlogin'>Admin Login</Link>
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import  { useState } from 'react';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import "../css/Login.css";
import{signIn} from '../service/auth';
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState();
  const navigate = useNavigate();
  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8181/api/v1/auth/login", { email, password });
      const token = response.data.token;
      const user = response.data.userResponse;

      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', email);
      
      navigate('/home');
    } catch (error) {
      console.error("Error:  ", error);
      alert("Password is Incorrect");
    }

  }
  return (
    <div className='l' >

      
    <div className="App">
        
        <br></br>
        <br></br>
        <br></br>
      <div className="contner">
        <form id="loginForm" onSubmit={handleFormSubmit}>
          <h2 className='lo' style={{marginRight:700}}>Login</h2><br></br>
          <div className='form-group'>
          <label htmlFor="email">Email</label>
          <br/>
          
          <input className='mn'
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail( e.target.value )}
            placeholder='Enter your email'
            required
          />
           {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <br></br>
          <br></br>

          <label htmlFor="password">Password</label>
          <br/>
          
          <input
          className='ps'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(  e.target.value )}
            required
            placeholder='Enter your password'
          />
          <br></br>
          <br></br>

          <div style={{display:"flex"}}>
            <button style={{width:100,height:50,color:"white"}} type="submit">Login</button>
            </div>
          <br></br>
          <div>
            <Link to='/adminlogin'>ADMIN</Link>
          </div>
          <h3 style={{fontSize:20}} className='dt'>Dont have an account?<br></br><NavLink to="/reg">Register</NavLink></h3>
         
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Login;
