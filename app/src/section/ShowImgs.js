import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/image/photozey7.jpg";
import img2 from "../assets/image/photozz99.jpg";
import img3 from "../assets/image/zeyImage1.jpg";
import img4 from "../assets/image/zeynus.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 3vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};
  z-index: +7;
 
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: +6;
`;
const Text = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 1rem;
  top: 0;
  right: 0;
  z-index: +8;
  width: 20%;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  left: 50%;
  height: auto;
  width: 25vw;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem 0;
  img {
    width: 100%;
    height: auto;
    z-index: +9;
  }
`;

const Products = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h4>{title}</h4>
    </Item>
  );
};

const ShowImgs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const verticalRef = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          scroller: ".App",
          end: "bottom+=100% top-=100%",
          scrub: 1,
          pinType: true,
        },
        ease: "none",
      });
      t1.fromTo(
        verticalRef.current,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: verticalRef.current,
            start: "top top",
            scroller: ".App",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, 5000);
    ScrollTrigger.refresh();
    return () => {};
  }, []);

  return (
    <Section ref={ref} id="showimgs">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        Projects
      </Title>
      <Text data-scroll data-scroll-speed="-4">
        Lorem Ipsum является текст-заполнитель обычно используется в
        графических, печать и издательской индустрии для предварительного
        просмотра макета и визуальных макетах.
      </Text>
      <Container ref={verticalRef}>
        <Products img={img1} title="when I drink my favorite drink" />
        <Products img={img2} title="Selfie pose" />
        <Products img={img3} title="My photo with my first diploma" />
        <Products img={img4} title="Material girl outfit" />
      </Container>
    </Section>
  );
};

export default ShowImgs;
