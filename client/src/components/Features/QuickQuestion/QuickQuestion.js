import React from 'react';
import './QuickQuestion.css'
import axios from 'axios';
import {connect} from 'react-redux';
import {helperSaveQuickQuestion} from '../../../redux/actions'

class QuickQuestion extends React.Component {
    constructor() {
        super();
        this.state = {
            question: null
        }
    }

    getOneQuestion =() =>{

        axios
            .get(`/slope_intercept/one?min=-0&max=30`)
            .then(res => {
                // console.log(res)
                this.setState({ question: res.data })
                
            })
    }

    componentDidMount() {
        this.getOneQuestion();
    }

    handleNewQuestion=()=>{
        this.getOneQuestion();
}

handleSavedQuickQuestion = () =>{
    const { question, answer } = this.state.question;
    this.props.helperSaveQuickQuestion({question, answer})

}


    render() {
        return (
            <div>
                    <h1>Quick Question</h1>
                <div className="quickQuestions-container">
     Equation:
       {this.state.question && <h1>{this.state.question.question}</h1>}

       Answer:{this.state.question && <h1>{this.state.question.answer}</h1>}
                </div>
                <button onClick={this.handleNewQuestion} >Update Equation</button>
                <button onClick={this.handleSavedQuickQuestion}>Save Equation</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.question
    }
}

export default connect(mapStateToProps, {helperSaveQuickQuestion})(QuickQuestion);