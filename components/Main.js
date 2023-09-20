import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Bio from "./Bio";
import NavBar from "./NavBar";
import Projects from "./Projects";
import RecentRepos from "./RecentRepos";
import Contact from "./Contact";

const MainWrapper = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-right: 0;
  scroll-snap-align: start;
`;

const Hero = styled.div`
  background: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClearanceDiv = styled.div`
  margin-bottom: 5em;
`;

const SectionButtonAnchor = styled.a`
  width: 8em;
  height: 4em;
  border: 1px solid white;
  border-radius: 1em;
  background: transparent;
  color: white;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
  opacity: 0;
  animation: ${(props) =>
    props.animate &&
    css`
      ${fromBottom} 1.5s linear forwards
    `};
`;

const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 4rem;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 1em;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /*The typwriter cursor */
  white-space: nowrap; /*Keeps the content on a single line*/
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  /* letter-spacing: 0.02em; Adjust as needed */
  animation: ${(props) =>
    props.animate &&
    css`
      ${typing} 1.5s steps(9, end),
      ${blinkCaret} 0.75s step-end forwards
    `};
`;

const SubHeading = styled.div`
  font-size: 2.5em;
  font-family: "Courier New", Courier, monospace;
  /* margin-bottom: 1em; */
  text-align: center;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.6em solid orange; /*The typwriter cursor */
  white-space: nowrap; /*Keeps the content on a single line*/
  margin: 0 auto 1em 0; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.1em; /*Adjust as needed */
  animation: ${(props) =>
    props.animate &&
    css`
      ${typingSub} 3s steps(20, end),
      ${blinkCaretSub} 0.75s step-end infinite
    `};

  @media (max-width: 500px) {
    font-size: 1.55rem;
  }
`;

const fromBottom = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

const SubSubHeading = styled.div`
  font-size: 1.5em;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 1em;
  text-align: center;
  opacity: 0;
  animation: ${(props) =>
    props.animate &&
    css`
      ${fromBottom} 1.5s linear forwards
    `};
  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;
const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }

`;

const typingSub = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkCaretSub = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: orange; }
`;

const Main = ({ repos }) => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateSubheading, setAnimateSubheading] = useState(false);
  const [animateSubSubheading, setAnimateSubsubheading] = useState(false);
  const [animateAnchor, setAnimateAnchor] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimateHeading(true);
      setTimeout(() => {
        setHidden(false);
        setAnimateSubheading(true);
        setTimeout(() => {
          setAnimateSubsubheading(true);
          setAnimateAnchor(true);
        }, 2500);
      }, 2000);
    }, 0);
  }, []);
  return (
    <MainWrapper id="#top">
      <Hero>
        <NavBar />
        <HeadingWrapper>
          <Heading animate={animateHeading}>Mike Coon</Heading>
        </HeadingWrapper>
        <HeadingWrapper>
          <SubHeading hidden={hidden} animate={animateSubheading}>
            Full-stack Developer
          </SubHeading>
        </HeadingWrapper>
        <SubSubHeading animate={animateSubSubheading}>
          I create awesome apps with JavaScript.
        </SubSubHeading>
        <SectionButtonAnchor href="#projects" animate={animateAnchor}>
          Projects
        </SectionButtonAnchor>
      </Hero>
      <ClearanceDiv id="projects" />
      <Projects />
      <ClearanceDiv id="repos" />
      <RecentRepos repos={repos} />
      <ClearanceDiv id="about" />
      <Bio />
      <ClearanceDiv id="contact" />
      <Contact />
    </MainWrapper>
  );
};

export default Main;
