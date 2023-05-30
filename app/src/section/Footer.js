import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duraction: 2,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,
    transition: {
      duraction: 2,
      delay: 2,
      ease: "easeInOut",
    },
  },
};

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  svg {
    width: 6rem;
    height: auto;
    overflow: visible;
    stroke-linecap: round;
    stroke-linejoin: round;
    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
  }
  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let el = document.querySelector(id);
    scroll.scrollTo(el, {
      duration: 2000,
      smooth: "easeInOutQuart",
      offset: "-100",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <svg
          data-scroll
          data-scroll-speed="2"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <Text
          data-scroll
          data-scroll-speed="-1"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Portfolio Zeynab
        </Text>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.03,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".abour")}>about</li>
          <li onClick={() => handleScroll("#project")}>project</li>
          <li onClick={() => handleScroll("#showimgs")}>contact</li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made &hearts; by Zeynab
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
