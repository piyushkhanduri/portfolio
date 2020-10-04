import React from "react";
import styled, { css } from "styled-components";
import Typist from "react-typist";

import { media } from "../utils/style";

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: "Raleway";
  position: absolute;
  top: 30%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  font-size: 32px;
  letter-spacing: 12px;
`}
`;

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(" ").slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(" ")
              .slice(1)
              .join(" ")}
          </StyledTypist>
        </Typist>
      );
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>I am </strong> Problem Solver
        <Typist.Backspace count={15} delay={400} />
        <span>Marketer</span>
        <Typist.Backspace count={8} delay={400} />
        <span>Presenter</span>
        <Typist.Backspace count={9} delay={400} />
        <span>an Activist</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={17} delay={10} />
        <strong>But Most importantly </strong>I am a Human.
      </StyledTypist>
    );
  }
}

export default HeroText;
