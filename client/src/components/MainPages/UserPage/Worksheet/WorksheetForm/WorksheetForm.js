import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class WorksheetForm extends React.Component {
    constructor() {
        super();
        this.state = {
            teachingLevel: '',
            numberOfStudents: 0,
            numberOfEquations: 0,
            equationType: '',
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


    render() {
        return (
            <div>
                <h1>Create a Worksheet</h1>
                <form className='workshett-form'>
                    <div className="teachingLevel">
                        <TextField
                            id="outlined-name"
                            label="Learning Level"
                            name='teachingLevel'
                            value={this.state.teachingLevel}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="numberOfStudents">
                        <TextField
                            id="outlined-number"
                            label="Number of students?"
                            name='numberOfStudents'
                            value={this.state.numberOfStudents}
                            onChange={this.handleChange}
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className="numberOfEquations">
                        <TextField
                            id="outlined-number"
                            label="Number of equations"
                            name='numberOfEquations'
                            value={this.state.numberOfEquations}
                            onChange={this.handleChange}
                            type="number"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className="equationType">
                        <TextField
                            id="outlined-name"
                            label=" What type of eqaution"
                            name='equationType'
                            value={this.state.equationType}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            onClick={this.handleSubmit}
                            className="submit-btn"
                            type="submit"
                            value="Save"
                        >
                            Populate
            </Button>
                    </div>


                </form>
            </div>
        )
    }
}

export default WorksheetForm;