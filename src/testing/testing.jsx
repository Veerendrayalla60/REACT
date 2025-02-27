import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./style.css";
 
function testing() {
    // const l = []
    const [page,setpage] = useState(false);
    // const [l,setl] = useState([{
    //     username : "",
    //     password :""
    // }])
    // const data = [
    //     {
    //         "email" : "admin",
    //         "password" : "admin@123"
    //     }
    // ]
    // const fun1 =()=>{
    //     const email = document.getElementsByTagName('input')[0].value;
    //     const password = document.getElementsByTagName('input')[1].value;
    //     console.log(email,password)
    //     data.map(i => {
    //         if(i.email == email && i.password == password){
    //             console.log("skhdvg")
    //             // setpage(true)
    //         }
    //     })
    // }
    if(page){
        window.location.href = './home'
    }
    const l=[
        {
            username :"",
            password :""
        }
    ]
    const fun1 = async() =>{
        const username = document.getElementsByTagName('input')[0].value;
        const password = document.getElementsByTagName('input')[1].value;
        const l= []
        l.push(username)
        l.push(password)
        // setl(l.username = username)
        // setl(l.password = password)
         console.log(l)
        axios.post("http://localhost:5000/fronted-data",l)
        .then(res =>{
            console.log(res.data, res.status)
            if(res.data){
                setpage(true)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
  return (
    <>
    <input type="text" placeholder='email' className='main'/><br />
    <input type="text" placeholder='password' /><br />
    <button >login</button>
    <button onClick={fun1}>hit an api</button>
    </>
  )
}

export default testing