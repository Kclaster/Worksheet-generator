import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";


const Wrapper = styled.ul`
  position: relative;
  color: white;
  background-color: #3f50b5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Typography variant="p" component="p">
          <div className="Footer">Worksheet Generator - 2019</div>
        </Typography>
      </Wrapper>
    );
  }
}

export default Footer;
