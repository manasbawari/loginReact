import React, { useState } from 'react'
import "./App.css"

function Login(){
  const [Loginstatus, setLoginStatus] = useState(false);

  function handleLoginClick(){
    setLoginStatus(true);
  }

  function handleSignupClick(){
    setLoginStatus(false);
  }


  return(
    <div className="background">
      <div className="container">
        <h1>{Loginstatus?"Login":"SignUp"}</h1>

        <div className = "email">
          <input type='text' placeholder ="Email" required></input>
        </div>

        

        {Loginstatus?
        <div className = "password">
          <input type='password' placeholder ="Password" required></input>
        </div>
        :
        <div>
          <div className = "preferredUsername">
            <input type='text' placeholder ="Preferred Username" required></input>
          </div>
          <div className = "password">
            <input type='password' placeholder ="Password" required></input>
          </div>
          <div className = "ConfirmPassword">
            <input type='password' placeholder ="Confirm Password" required></input>
          </div>
        </div>
        }

        <div className = "rememberMe">
          <input type="checkbox" id="rememberMe"></input>
          <label for="rememberMe">Remember Me</label>
        </div>

        <div className = "buttons">
          <div className = "signUp-button">
            <button onClick = {handleSignupClick}>SignUp</button>
          </div>

          <div className = "login-button">
            <button onClick={handleLoginClick}>Login</button>
          </div>
        </div>
        
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>



        {Loginstatus?
        <div className = "forgot-pass">
          <a href=''>Forgot Password</a>
        </div>
        :
        ""
        }

      </div>
    </div>
  )
}

export default Login; 

