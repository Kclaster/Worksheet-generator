import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";

function generate(element) {
  return [0, 1, 2, 3, 4].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

class UserPref extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
    console.log(name);
  };

  render() {
    // const { classes } = this.props;
    const { dense, secondary } = this.state;

    return (
      <div className ='historyList'>
        <Typography variant="h4" component="h4">
          History
        </Typography>
        <List dense={dense}>
          {generate(
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          )}
        </List>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
          >
            Download
          </Button>
        </div>
      </div>
    );
  }
}

export default UserPref;
