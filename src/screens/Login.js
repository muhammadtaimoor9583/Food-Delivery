import React from 'react';
import Navbar from '../components/Navbar';
import {useState} from 'react';
import Footer from '../components/Footer';
import {Link,useNavigate} from 'react-router-dom';


export default function Login() {
  const navigate=useNavigate();
  const [credentials,setCredentials]=useState({email:"",password:""});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/login",
            {
                method:"POST",
                headers:{
                   "Content-Type":"application/json"
                },
                body:JSON.stringify({email:credentials.email,password:credentials.password})
            }
        );
        const json=await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem("email",credentials.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate('/');
        }
        else
        {
            return (
                alert('Please enter valid credential')
            )
        }


    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
    }

  return (
    <>
<Navbar />
    <div className='container'>


<form onSubmit={handleSubmit}>
    
    <div className="form-group m-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange} />
    </div>
    <div className="form-group m-3">
        <label htmlFor="exampleInputPassword2">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
    </div>
    
    <button type="submit" className="btn btn-success m-3">Login</button>
    <Link to="/createuser" className="btn btn-danger m-3">I'm a new User</Link>
</form>


</div>
<Footer />
     
    </>
  )
}
