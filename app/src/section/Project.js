import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import img1 from "../assets/image/photo5zey.jpg";
import img2 from "../assets/image/photozey.jpg";
import img3 from "../assets/image/photozey6.jpg";
import img4 from "../assets/image/photozey7.jpg";
const Section = styled.section`
  min-height: 200vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: +6;
`;
const Left = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: +5;
  width: 35%;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  width: 65%;
  padding-left: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: 35%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.grey};
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h4 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

const Products = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </Item>
  );
};

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);
  useLayoutEffect(() => {
    let pinWrapWidth = horizontalRef.current.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          scroller: ".App",
          end: pinWrapWidth,
          scrub: 1,
          pinType: true,
        },
        height: `${horizontalRef.current.scrollWidth}px`,
        ease: "none",
      });
      t1.to(horizontalRef.current, {
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          scroller: ".App",
          end: pinWrapWidth,
          scrub: 1,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
    }, 5000);

    return () => {};
  }, []);

  return (
    <Section>
      <Title data-scroll data-scroll-speed="-1">
        Projects
      </Title>
      <Left>
        <p>
          Lorem Ipsum является текст-заполнитель обычно используется в
          графических, печать и издательской индустрии для предварительного
          просмотра макета и визуальных макетах. Lorem Ipsum является
          текст-заполнитель обычно используется в графических, печать и
          издательской индустрии для предварительного просмотра макета и
          визуальных макетах. Lorem Ipsum является текст-заполнитель обычно
          используется в графических, печать и издательской индустрии для
          предварительного просмотра макета и визуальных макетах.
        </p>
      </Left>
      <Right ref={horizontalRef}>
        <Products img={img1} title="when I drink my favorite drink" />
        <Products img={img2} title="Selfie pose" />
        <Products img={img3} title="My photo with my first diploma" />
        <Products img={img4} title="Material girl outfit" />
      </Right>
    </Section>
  );
};

export default Project;
