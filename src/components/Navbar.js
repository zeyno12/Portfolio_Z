import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavbarContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  z-index: +4;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10rem;
`;

const MenuBtn = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const MenuItem = styled(motion.li)`
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
`;

// const itemVariants={
// hidden:{

// }
// }

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavbarContainer
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
      click={click}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.06}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.9,y:0}}>Home</MenuItem>
        <MenuItem whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.9,y:0}}>About</MenuItem>
        <MenuItem whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.9,y:0}}>Project</MenuItem>
        <MenuItem whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.9,y:0}}>Contact</MenuItem>
      </MenuItems>
    </NavbarContainer>
  );
};

export default Navbar;
