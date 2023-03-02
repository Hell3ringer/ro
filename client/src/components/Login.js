import React, { useState } from "react";
import axios from 'axios'
// import "../styles/Login.css";

// const Login = () => {
//   return (
//     // jsx
//     <div>Hi from login page</div>
//   );
// };

function Login() {
  // hooks
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");

  function handleChange(event) {
    if (event) {
      //   const email = event.target.value;
      if (event.target.id === "exampleInputEmail1")
        setEmail(event.target.value);
      else setPaswword(event.target.value);
    }
  }
  function handleClick() {
    console.log("button is clicked...");
    console.log(email);
    console.log(password);
    // api call
    // post request
    const obj = {
      email,
      password,
    }
    //promise 
    axios.get('http://localhost:4000/api/login' , obj).then((data) => {
      console.log('get resolved');
      console.log(data);
    }).catch((err) => {
      console.log('error is ' , err);
    })
    
  }
  return (
    // jsx
    <div>
      <div class="card loginContainer">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => handleChange(e)}
                value={email}
              />
              <div id="Help" class="form-text">
                We'll never share your email with anyone else (not until u give
                moni).
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <div></div>
              <div />
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => handleChange(e)}
                value={password}
              />
            </div>
          </form>
          <button class="btn btn-success" onClick={() => handleClick()}>
            Signin
          </button>
          <a href="#register">next page</a>
        </div>
      </div>
    </div>
  );
}

export { Login };
