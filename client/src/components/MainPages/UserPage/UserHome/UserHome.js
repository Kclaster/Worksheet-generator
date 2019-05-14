import React from 'react';
import './UserHome.css'
import QuickQuestion from '../../../Features/QuickQuestion/QuickQuestion'
import { connect } from 'react-redux'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class UserHome extends React.Component {
  render() {
    return (
      <div className="userHome">
        
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            Jump Back In
          </Typography>

          <Paper className="worksheet-list">
            <Typography variant="p" component="p">
              Equation History:
            </Typography>
          </Paper>
        </Grid>
        <div>
          <Grid item xs={6}>
            <QuickQuestion />
          </Grid>
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        equations: state.equations
    }
}

export default  connect(mapStateToProps)(UserHome);
