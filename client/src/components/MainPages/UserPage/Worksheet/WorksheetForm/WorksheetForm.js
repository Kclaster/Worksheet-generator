import React from "react";
import "./WorksheetForm.css";
// import MultipleSelect from './MultipleSelect'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import WorksheetData from "./WorksheetData";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SavedQuickQuestions from "../../../../Features/QuickQuestion/SavedQuickQuestions";
import { worksheetData } from "../../../../../redux/actions";
import { connect } from "react-redux";

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
    console.log(name);
  };

  getEquations = () => {
    return axios.get(
      `/slope_intercept?min=${this.state.min}&max=${
        this.state.max
      }&numOfQuestions=${this.state.numOfQuestions}`
    );
  };

  handleEquations = event => {
    event.preventDefault();
    this.getEquations().then(response => {
      console.log(response.data);
      this.props.worksheetData(response.data);
    });
  };

  handleClick = () => {
    this.setState({ displayAnswers: !this.state.displayAnswers });
  };

  handleSaveWorksheet = () => {
    const { question } = this.state;
    this.props.saveWorksheet(question);
  };

  render() {
    return (
      <div>
        <div className="savedQuestion-container">
          <SavedQuickQuestions />
        </div>
        <Typography variant="h4" component="h4">
          Create a Worksheet
        </Typography>
        <form className="workshett-form">
          <div>
            <TextField
              id="filled-number"
              label="Min Number"
              name="min"
              value={this.state.min}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
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
                shrink: true
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
                shrink: true
              }}
              margin="normal"
              variant="filled"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleEquations}
              className="submit-btn"
              type="submit"
              value="Save"
            >
              Populate
            </Button>
          </div>
        </form>
        <br />

        <Typography variant="h4" component="h4">
          WorkSheet Section
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
          className="submit-btn"
          type="submit"
        >
          Show Answer
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.printDocument}
          className="submit-btn"
          type="submit"
        >
          Download
        </Button>

        <Grid item xs={12}>
          <div id="divToPrint" className="Worksheet">
            <div className="equation-container">
              {this.props.question.map((e, i) => (
                <WorksheetData
                  key={i}
                  index={Number(i + 0)}
                  equations={e.question}
                  answer={e.answer}
                  displayAnswers={this.state.displayAnswers}
                />
              ))}
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.worksheetData.data
  };
};

export default connect(
  mapStateToProps,
  { worksheetData }
)(WorksheetForm);
