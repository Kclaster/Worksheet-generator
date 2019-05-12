import React from "react";
import "./Footer.css";
import Typography from "@material-ui/core/Typography";

class Footer extends React.Component {
  render() {
    return (
      <Typography variant="h6" component="h6">
        <div className="Footer">Worksheet Generator // 2019</div>
      </Typography>
    );
  }
}

export default Footer;
