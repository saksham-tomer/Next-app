"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import {axios} from "axios"

export default function SignUp(){
    const[user,setUser] = React.useState({
        email: "",
        username: "",
        password: "",

  
    })
     const onSignUp = async () =>{

     }      
    return(
        <div className="flex">
            <h1>Signup</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input id="text"
            type="text"
            value={user.username}
            onChange={(e)=>setUser({...user,username: e.target.value})}
            placeholder="username"/>

           <label htmlFor="email">email</label>
            <input id="email"
            type="text"
            value={user.email}
            onChange={(e)=>setUser({...user,email: e.target.value})}
            placeholder="email"/>
  
           <label htmlFor="password">password</label>
            <input id="password"
            type="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password: e.target.value})}
            placeholder="password"/>
            <button onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
            >Signup Here</button>
            <link href="login"/>
        </div>

    )
    
}