
import { useRef, useState } from "react"
import { login , useAuth } from "./firebase";
import "./App.css"



export default function App() {
const [ loading, setloading ] = useState(false);
const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
const WinH = window.screen.height;
const WinW =  window.screen.width; 

console.log(WinW, WinH)

  
if (WinW >= 320 && WinW <= 575) {
   return (
    
    <div className="App">
      <div className="bg2">
      <div className="container-fluid">
        <div className="row">


        <div className="col-md-4 col-sm-4 col-xs-12"></div>
        <div className="col-md-4 col-sm-4 col-xs-12">
        
          
        <form className="form-container2">
          <img src="logo.png" alt=""></img>

          <div className="mb-3">
        <input type="text" placeholder="Email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
        <input type="password" placeholder="Password" ref={passwordRef} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check"></div>
        <div className="d-grid"> 
        <button type="submit" className="btn btn-success btn-primary" disabled={loading || currentUser } onClick={handleLogin}>Log In</button>
        </div>

       
        </form>

          


          
          
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12"></div>

          


        </div>
      </div>
      </div>
    </div>
    
  );
}
else{
  return (
    
    <div className="App">
      <div className="bg">
      <div className="container-fluid">
        <div className="row">


        <div className="col-md-4 col-sm-4 col-xs-12"></div>
        <div className="col-md-4 col-sm-4 col-xs-12">
        
          
        <form className="form-container">
          <img src="logo.png" alt=""></img>

        
        <div className="mb-3">
        <input type="text" placeholder="Email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
        <input type="password" placeholder="Password" ref={passwordRef} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check"></div>
        <div className="d-grid"> 
        <button type="submit" className="btn btn-success btn-primary" disabled={loading || currentUser } onClick={handleLogin}>Log In</button>
        </div>
        </form>

          


          
          
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12"></div>

          


        </div>
      </div>
      </div>
    </div>
    
  );
}

 


 

  async function handleLogin() {
    setloading(true)


    try{
      await login(emailRef.current.value, passwordRef.current.value)
    } catch{alert("Error !")}

    setloading(false);

  }

  


  
}


