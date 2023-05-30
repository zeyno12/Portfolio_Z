import React, { useRef } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./section/Home";
import { AnimatePresence } from "framer-motion";
import About from "./section/About";
import Project from "./section/Project";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./section/Banner";
import ShowImgs from "./section/ShowImgs";
import Footer from "./section/Footer";
function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Project />
              <Banner />
              <ShowImgs />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
