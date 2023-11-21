import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/video/video.mp4";
import { motion } from "framer-motion";
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: +1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: +2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};

  .name {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    text-transform: capitalize;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div className="name">
          <motion.h1
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
            variants={item}
          >
            Z
          </motion.h1>
          <motion.h1
            data-scroll
            data-scroll-delay="0.10"
            data-scroll-speed="4"
            variants={item}
          >
            e
          </motion.h1>
          <motion.h1
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
            variants={item}
          >
            y
          </motion.h1>
          <motion.h1
            data-scroll
            data-scroll-delay="0.07"
            data-scroll-speed="4"
            variants={item}
          >
            n
          </motion.h1>
          <motion.h1
            data-scroll
            data-scroll-delay="0.05"
            data-scroll-speed="4"
            variants={item}
          >
            a
          </motion.h1>
          <motion.h1
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="4"
            variants={item}
          >
            b
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.03"
          data-scroll-speed="2"
        >
          Front-End Developer.
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
