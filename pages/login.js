import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Login from '../components/Login/login'
import Logout from '../components/Login/logout'

const login = () => {

    const session = useSession()    

    if(session.data == null ) {
        return(
            
            <Login />
        ) 
    }

    return(

        <Logout />
    )

return (

    <Login />

);

    
}

export default login
