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
        <strong>I Make</strong> Awesome D.M. Campaigns
        <Typist.Backspace count={23} delay={300} />
        <span> Psychology based B-plans</span>
        <Typist.Backspace count={25} delay={300} />
        <span> Business Models</span>
        <Typist.Backspace count={16} delay={300} />
        <span> Poor Emotional Choices</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={32} delay={10} />
        <strong>But Mostly Just</strong> Cool Business Strategies
      </StyledTypist>
    );
  }
}

export default HeroText;
