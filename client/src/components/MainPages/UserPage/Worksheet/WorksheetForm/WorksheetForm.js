import React from 'react';
import './WorksheetForm.css'
// import MultipleSelect from './MultipleSelect'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorksheetData from './WorksheetData';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas'
import SavedQuickQuestions from '../../../../Features/QuickQuestion/SavedQuickQuestions';
import { saveWorksheet, worksheetData } from '../../../../../redux/actions';
import { connect } from 'react-redux'


class WorksheetForm extends React.Component {
    constructor() {
        super();
        this.state = {
            max: 0,
            min: 0,
            numOfQuestions: 0,
            question: [],
            displayAnswers: false
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
        return new Promise(resolve => axios
            .get(`/slope_intercept?min=${this.state.min}&max=${this.state.max}&numOfQuestions=${this.state.numOfQuestions}`)
            .then(res => {
                console.log(res)
                this.setState({ question: res.data });
                resolve('resolved');
            })
        )
    }

    handleEquations = (event) => {
        event.preventDefault()
        this.getEquations().then(() => this.handleWorksheetData());
    }

    handleClick = () => {
        this.setState({ displayAnswers: !this.state.displayAnswers });
    };


    handleSaveWorksheet = () => {
        const { question } = this.state;
        this.props.saveWorksheet(question)
    }

    handleWorksheetData = () => {
        const { question } = this.state;
        console.log('heeeeeeeeeeeeeeee', this.state.question)
        this.props.worksheetData(question)
    }

    // printDocument = () => {
    //     window.html2canvas = html2canvas;

    //     let doc = new jsPDF();
    //     let elWidth = document.querySelector('#divToPrint').offSetWidth;
    //     doc.html(document.querySelector('#divToPrint'), {
    //         html2canvas: {
    //             width: elWidth
    //         },
    //         callback: function (doc) {
    //             console.log(doc);
    //             doc.save();
    //         }
    //     })
    // }




    render() {
        const renderedEquations = this.state.question.map((e, i) => {
            return <WorksheetData key={i} index={Number(i + 0)} equations={e.question} answer={e.answer} displayAnswers={this.state.displayAnswers} />
        })
        // console.log(this.props)

        return (
            <div>
                <div className="savedQuestion-container">
                    <SavedQuickQuestions />
                </div>
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
                            name="numOfQuestions"
                            value={this.state.numOfQuestions}
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


                <h1>Worksheet section....</h1>
                <Button
                    variant="contained"
                    onClick={this.handleClick}
                    className="submit-btn"
                    type="submit"
                >
                    show answer
            </Button>
                <Button
                    variant="contained"
                    onClick={this.printDocument}
                    className="submit-btn"
                    type="submit"
                >
                    download
            </Button>
                <Button
                    variant="contained"
                    onClick={this.handleSaveWorksheet}
                    className="submit-btn"
                    type="submit"
                >
                    save
            </Button>
                <div id="divToPrint" className='Worksheet'>
                    <div className="equation-container">
                        {renderedEquations}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        question: state.question
    }
}


export default connect(mapStateToProps, { worksheetData })(WorksheetForm);