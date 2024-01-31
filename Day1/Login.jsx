import { useState } from 'react';
import { Link} from 'react-router-dom';
import "../css/Login.css"



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  

  const handleformSubmit = async (e) => {
    e.preventDefault();

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }
  };

  return (
    <div className="full">
      <div className="outer" id="login-full">
        <h1 id="title"></h1>
        <h1 id="head">LOGIN</h1>
        <div className="fields">
          <label htmlFor="email">User email</label>
          <br/>
          <input
            id="email"
            label='user'
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <br/>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button id="submit" onClick={handleformSubmit} type="submit">
            <Link to='/home'>Login</Link>
          </button>

          <h4 id="lower">
            Dont have an account? <Link to='/reg'>Register</Link>
          </h4>
          <h4>
            <Link to='/adminlogin'>Admin Login</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
