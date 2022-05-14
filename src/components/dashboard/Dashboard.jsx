import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

// import Aside from './components/'
import {Navbar,Aside,Content,Loader} from './';
const  Dashboard = () =>{
const {user} = useContext(AuthContext);

  return ( 
      <>
      {user ?(
         <>
          <Aside/>
          <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Navbar title="Dashboard"/>
           <Content/>
          </div>
         </>
      ):(
      <div className="mt-50">
     <Loader/>
    </div>
      ) }
      </>
      )
}

export default Dashboard