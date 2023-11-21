import React from "react";
import styled from "styled-components";

import img1 from "../assets/image/bagrv.jpg";
import img2 from "../assets/image/developerz.jpg";
import img3 from "../assets/image/dezey.jpg";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  display: flex;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: +5;
`;
const Left = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: +5;
  margin-top: 20%;
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .small_img_1 {
    position: absolute;
    right: 95%;
    bottom: 10%;
    width: 40%;
  }
  .small_img_2 {
    position: absolute;
    left: 80%;
    bottom: 30%;
    width: 40%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Lorem Ipsum является текст-заполнитель обычно используется в
        графических, печать и издательской индустрии для предварительного
        просмотра макета и визуальных макетах.
      </Left>
      <Right>
        <img src={img1} alt="img/about" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          alt="img/about"
          className="small_img_1"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="img/about"
          className="small_img_2"
        />
      </Right>
    </Section>
  );
};

export default About;
