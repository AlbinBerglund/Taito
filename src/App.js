import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


 function App() {

  

   return (
      <div className="App">
        
        <BrowserRouter>

        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        </Routes>

        
        
        
        </BrowserRouter>

       
      </div>
    
  );
}
export default App;

 


 


  





