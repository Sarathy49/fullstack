import  { useState } from 'react';
import '../css/Signup.css'
import {  NavLink,useNavigate } from 'react-router-dom';
import {signUp} from '../service/auth';

const Signup = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      
          const response = await signUp({ name, email, password });
          if (response.status === 202) {
            navigate('/');
          }
       
      } catch (error) {
        console.error("Error: ", error);
      }
    }

      return (
        <div className='l'>
          
        <div className="App">
          
          <div className="continer">
            <form id="loginForm" >
              <h2 className='lo' style={{marginRight:700}}>Register</h2>
              <label htmlFor="username">Username</label>
              <br/>
              
              <input className='mn'
                type="text"
                id="Username"
                name="Username"
                value={name}
                onChange={(e) => setName( e.target.value )}
                placeholder='Enter your Username'
                required
              />
               <br></br>
              <br></br>
              <label htmlFor="username">Mobile Number</label>
              <br/>
              
              <input className='mn'
                type="text"
                id="mobilenumber"
                placeholder='Enter your mobile number'
                required
              />
              <br></br>
              <br></br>

              <label htmlFor="username">Email</label>
              <br/>
              
              <input className='mn'
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail( e.target.value )}
                required
                placeholder='Enter your Email'
               />
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
                onChange={(e) => setPassword( e.target.value )}
                required
                placeholder='Enter your password'
              />
             
             

               

               <br></br>
          <br></br>

          <button style={{width:100,height:50,color:"white"}} className='bt' type="button" onClick={handleSubmit}>
            Register
          </button>
          <br></br>
          <br></br>
          <h3 style={{fontSize:20}} className='dt'>Already have an account?<NavLink to="/">Login</NavLink></h3>
         
        </form>

        </div>
    </div>
    </div>
    
  );
};

export default Signup