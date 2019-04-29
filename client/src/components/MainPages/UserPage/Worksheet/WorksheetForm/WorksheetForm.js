import React from 'react';
import './WorksheetForm.css'
// import MultipleSelect from './MultipleSelect'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';





class WorksheetForm extends React.Component {
    constructor() {
        super();
        this.state = {
            max: 1,
            min: 0,
            numOfQuestions: 0,
            question: null
        };
    }

    handleChange = event => {
        const target = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: target
        });
        console.log(name)
    };


    getEquations = () => {

        axios
            .get(`/slope_intercept?min=1&max=30&numOfQuestions=10`)
            .then(res => {
                console.log(res)
                this.setState({ question: res.data })
            })
    }

    componentDidMount() {
        this.getEquations();

    }

    handleEquations = (event) => {
        event.preventDefault()

        this.getEquations();
    }

    render() {
        return (
            <div>
                <h1>Create a Worksheet</h1>
                <form className='workshett-form'>
                    <div>
                    <TextField
                            id="filled-number"
                            label="Min Number"
                            name='min'
                            value={this.state.min}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Max Number"
                            name="max"
                            value={this.state.max}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Number of Equations"
                            name="numberOfEquations"
                            value={this.state.numberOfEquations}
                            onChange={this.handleChange}
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            onClick={this.handleEquations}
                            className="submit-btn"
                            type="submit"
                            value="Save"
                        >
                            Populate
            </Button>
                    </div>
                </form>



                {/* <MultipleSelect /> */}







                <div className='Worksheet'>
                    <h1>Worksheet section....</h1>
                    Equation:
       {this.state.question && <h1>{this.state.question.question}</h1>}

                    Answer:{this.state.question && <h1>{this.state.question.answer}</h1>}


                </div>
            </div>
        )
    }
}

export default WorksheetForm;