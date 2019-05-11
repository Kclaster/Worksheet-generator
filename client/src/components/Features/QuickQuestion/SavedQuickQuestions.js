import React from 'react';
import './QuickQuestion.css'
import axios from 'axios';
import { connect } from 'react-redux';

class SavedQuickQuestion extends React.Component {

    // renderList() {
    //     console.log(this.props.question)
    //     return this.props.question.map((e) => {
    //         return (
    //             <div>
    //                 <ul>
    //                     <li>{e.question}</li>
    //                     <li>{e.answer}</li>
    //                     <button>Add</button>
    //                 </ul>
    //             </div>
    //         );
    //     });
    // };


    render() {

        console.log(this.props.question)
        return (
            <div>
               {this.props.question.map((e) => {
            return (
                <div>
                    <ul>
                        <li>{e.question}</li>
                        <li>{e.answer}</li>
                        <button>Add</button>
                    </ul>
                </div>
            );
        })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.savedQuestion)
    return {
        question: state.savedQuestion
    }
}


export default connect(mapStateToProps)(SavedQuickQuestion);