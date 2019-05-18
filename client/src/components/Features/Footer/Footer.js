import React from "react";
// import "./Footer.css";
// import Typography from "@material-ui/core/Typography";

var style = {
    backgroundColor: "#3f50b5",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10px",
    width: "100%",
    color:"white"
}


function Footer() {
    return (
        <div>
            <div style={style}>Worksheet Generator - 2019  
            </div>
        </div>
    )
}

export default Footer