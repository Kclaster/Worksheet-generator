import React from 'react';
import './WorksheetForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorksheetData from './WorksheetData';
// import jsPDF from "jspdf";
// import html2canvas from 'html2canvas'
import SavedQuickQuestions from '../../../../Features/QuickQuestion/SavedQuickQuestions';
import {
  saveWorksheet,
  worksheetData,
  helperSavePopulatedQuestionArr
} from '../../../../../redux/actions';
import { connect } from 'react-redux';

// import React from "react";
// import "./WorksheetForm.css";
// // import MultipleSelect from './MultipleSelect'
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import WorksheetData from "./WorksheetData";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

class WorksheetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      max: 30,
      min: 0,
      numOfQuestions: 10,
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
      this.props.helperSavePopulatedQuestionArr(response.data);
    });
  };

  handleClick = () => {
    this.setState({ displayAnswers: !this.state.displayAnswers });
  };

  handleSaveWorksheet = async () => {
    const { question } = this.props;
    console.log('aaaaakuna', question);
    await this.props.saveWorksheet(question, this.props.userName);
    axios.post('worksheets', {
      data: question
    });
  };

  // handleWorksheetData = () => {
  //     const { question } = this.state;
  //     console.log('heeeeeeeeeeeeeeee', this.state.question)
  //     this.props.worksheetData(question)
  // }

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
    // const renderedEquations = this.state.question.map((e, i) => {
    //     return <WorksheetData key={i} index={Number(i + 0)} equations={e.question} answer={e.answer} displayAnswers={this.state.displayAnswers} />
    // })

    return (
      <div>
        <div className="savedQuestion-container">
          <SavedQuickQuestions />
        </div>
        <h1>Create a Worksheet</h1>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.worksheetData.data,
    worksheet: state.worksheetSaver,
    userName: state.savedUsername
  };
};

export default connect(
  mapStateToProps,
  { worksheetData, saveWorksheet, helperSavePopulatedQuestionArr }
)(WorksheetForm);
//  }

//   getEquations = () => {
//     axios
//       .get(
//         `/slope_intercept?min=${this.state.min}&max=${
//           this.state.max
//         }&numOfQuestions=${this.state.numOfQuestions}`
//       )
//       .then(res => {
//         console.log(res);
//         this.setState({ question: res.data });
//       });
//   };

//   handleEquations = event => {
//     event.preventDefault();

//     this.getEquations();
//   };

//   handleClick = () => {
//     this.setState({ displayAnswers: !this.state.displayAnswers });
//   };

//   printDocument = () => {
//     html2canvas(document.querySelector("#divToPrint")).then(function(canvas) {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF({
//         orientation: "portrait"
//       });
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight - 50);
//       pdf.save("download.pdf");
//     });
//   };

//   render() {
//     const renderedEquations = this.state.question.map((e, i) => {
//       return (
//         <WorksheetData
//           key={i}
//           index={Number(i + 0)}
//           equations={e.question}
//           answer={e.answer}
//           displayAnswers={this.state.displayAnswers}
//         />
//       );
//     });

//     return (
//       <div>
//         <Typography variant="h4" component="h4">
//           Create A Worksheet
//         </Typography>
//         <form className="workshett-form">
//           <div>
//             <TextField
//               id="filled-number"
//               label="Min Number"
//               name="min"
//               value={this.state.min}
//               onChange={this.handleChange}
//               type="number"
//               InputLabelProps={{
//                 shrink: true
//               }}
//               margin="normal"
//               variant="filled"
//             />
//             <TextField
//               id="filled-number"
//               label="Max Number"
//               name="max"
//               value={this.state.max}
//               onChange={this.handleChange}
//               type="number"
//               InputLabelProps={{
//                 shrink: true
//               }}
//               margin="normal"
//               variant="filled"
//             />
//             <TextField
//               id="filled-number"
//               label="Number of Equations"
//               name="numOfQuestions"
//               value={this.state.numOfQuestions}
//               onChange={this.handleChange}
//               type="number"
//               InputLabelProps={{
//                 shrink: true
//               }}
//               margin="normal"
//               variant="filled"
//             />
//           </div>
//           <div>
//             <Button
//               variant="contained"
//               color="secondary"
//               variant="contained"
//               onClick={this.handleEquations}
//               className="submit-btn"
//               type="submit"
//               value="Save"
//             >
//               Populate
//             </Button>
//           </div>
//         </form>
//         <br></br><br></br>
//         <Typography variant="h4" component="h4">
//           WorkSheet Section
//         </Typography>
//         <Button
//           variant="contained"
//           color="secondary"
//           variant="contained"
//           onClick={this.handleClick}
//           className="submit-btn"
//           type="submit"
//         >
//           Show Answer
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           variant="contained"
//           onClick={this.printDocument}
//           className="submit-btn"
//           type="submit"
//         >
//           Download
//         </Button>

//         {/* Remove grid if issues */}
//         <Grid item xs={12}>
//           <div id="divToPrint" className="Worksheet">
//             <div className="equation-container">{renderedEquations}</div>
//           </div>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default WorksheetForm;
