import React from 'react';
import './QuickQuestion.css'
import axios from 'axios';


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


    render() {
        console.log(this.state.question)
        return (
            <div>
                    <h1>Quick Question</h1>
                <div className="quickQuestions-container">
     Equation:
       {this.state.question && <h1>{this.state.question.question}</h1>}

       Answer:{this.state.question && <h1>{this.state.question.answer}</h1>}
                </div>
                <button onClick={this.handleNewQuestion} >Update Equation</button>
                <button >Save Equation</button>
            </div>
        );
    }
}

export default QuickQuestion;