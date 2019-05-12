import React from "react";
import "./WorksheetForm.css";
// import MultipleSelect from './MultipleSelect'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import WorksheetData from "./WorksheetData";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
    axios
      .get(
        `/slope_intercept?min=${this.state.min}&max=${
          this.state.max
        }&numOfQuestions=${this.state.numOfQuestions}`
      )
      .then(res => {
        console.log(res);
        this.setState({ question: res.data });
      });
  };

  handleEquations = event => {
    event.preventDefault();

    this.getEquations();
  };

  handleClick = () => {
    this.setState({ displayAnswers: !this.state.displayAnswers });
  };

  printDocument = () => {
    html2canvas(document.querySelector("#divToPrint")).then(function(canvas) {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait"
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight - 50);
      pdf.save("download.pdf");
    });
  };

  render() {
    const renderedEquations = this.state.question.map((e, i) => {
      return (
        <WorksheetData
          key={i}
          index={Number(i + 0)}
          equations={e.question}
          answer={e.answer}
          displayAnswers={this.state.displayAnswers}
        />
      );
    });

    return (
      <div>
        <Typography variant="h4" component="h4">
          Create A Worksheet
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

        {/* Remove grid if issues */}
        <Grid item xs={12}>
          <div id="divToPrint" className="Worksheet">
            <div className="equation-container">{renderedEquations}</div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default WorksheetForm;
