
import React, { useContext } from "react";
import { AuthContext } from '../context/auth';
import {Header,Footer,Hero,Content} from "./";

const Home = () => {
const contextData = useContext(AuthContext)
  return (
    
<>
<Header user={contextData.user}/>
<Hero/>
<Content/>
<Footer/>
             
</>                                                 
  )
}

export default Home