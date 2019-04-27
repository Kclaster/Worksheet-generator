import React from 'react';
import './UserHome.css'
import QuickQuestion from '../../../Features/QuickQuestion/QuickQuestion'


class UserHome extends React.Component{
    render(){
        return(
            <div className= "userHome">
               <div className="worksheet-list">
               Jump Back in

               </div>

               <div>
                   <QuickQuestion/>
               </div>
        </div>
        )
    }
}

export default UserHome;