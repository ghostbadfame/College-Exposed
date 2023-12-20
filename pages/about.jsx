import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/About/Landing'
import { useSession, signIn } from "next-auth/react";

const About = () => {

  const {data: session2 } = useSession();
  return (
    <div>
      
       <Navbar userName={ (session2?.user?.name) ? session2.user.name.split(" ")[0] : 'login' } />
      <Landing /> 
    </div>
  )
}

export default About
