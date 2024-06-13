import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

export default function Signup() {

    const [credentials,setCredentials]=useState({name:"",email:"",password:"",location:""});
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser",
            {
                method:"POST",
                headers:{
                   "Content-Type":"application/json"
                },
                body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
            }
        );
        const json=await response.json();
        console.log(json);
        if(json.success){
            console.log('Successfully created');
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
                        <label htmlFor="exampleInputPassword1">Your Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your name" name="name" value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword2">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="location_input">Location</label>
                        <input type="text" className="form-control" id="location_input" placeholder="Your location" name="location" value={credentials.loaction} onChange={onChange} />
                    </div>

                    <button type="submit" className="btn btn-success m-3">Submit</button>
                    <Link to="/login" className="btn btn-danger m-3">Already a User</Link>
                </form>


            </div>
                <Footer />

        </>
    )
}
