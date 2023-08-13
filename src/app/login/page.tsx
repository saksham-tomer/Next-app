"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import {axios} from "axios"

export default function LoginPage(){
    const[user,setUser] = React.useState({
        email: "",
        
        password: "",

  
    })
     const onLogin = async () =>{

     }      
    return(
        <div className="flex">
            <h1>Signup</h1>
            <hr/>
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
            <button onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" 
            >Login Here</button>
            <link href="signup"/>
        </div>

    )
    
}