import React from 'react';
import './UserHome.css'
import QuickQuestion from '../../../Features/QuickQuestion/QuickQuestion'
import { connect } from 'react-redux'


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
const mapStateToProps = (state) => {
    return {
        equations: state.equations
    }
}

export default  connect(mapStateToProps)(UserHome);