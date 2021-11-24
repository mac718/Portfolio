import { useEffect, useState, useLayoutEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { projects } from "../data";
import Bio from "./Bio";
import NavBar from "./NavBar";
import { GoMarkGithub } from "react-icons/go";
import { MdScreenShare } from "react-icons/md";
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

const ProjectsButton = styled.button`
  width: 8em;
  height: 4em;
  border: 1px solid white;
  border-radius: 1em;
  background: transparent;
  color: white;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
`;

const ProjectsButtonAnchor = styled.a`
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
  letter-spacing: 0.2; /*Adjust as needed */
  animation: ${(props) =>
    props.animate &&
    css`
      ${typingSub} 3s steps(20, end),
      ${blinkCaretSub} 0.75s step-end infinite
    `};
  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;

const fromBottom = keyframes`
  from { opacity: 0}
  to { opacity: 1}
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

const ProjectsSection = styled.section`
  width: 100%;
  background: black;
  height: 100%;
  margin-bottom: 5em;
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  background: black;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
`;

const ProjectsHeading = styled.div`
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
`;

const fadeIn = keyframes`
  from: {
    opacity: 0;
  }
  to {opacity: 0.9}
`;

const ProjectCardCover = styled.div`
  position: absolute;
  opacity: 0;
  background: black;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    animation: ${css`
      ${fadeIn} 0.5s forwards
    `};
  }
`;

const ProjectCardCoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
`;

const ProjectCardCoverGitButton = styled.button`
  width: 8em;
  height: 4em;
  border: 1px solid white;
  border-radius: 1em;
  background: transparent;
  color: white;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  margin: 1em;

  &:hover {
    border: 1px solid orange;
    color: orange;
  }
`;

const ProjectCardCoverLiveButton = styled.button`
  width: 8em;
  height: 4em;
  border: 1px solid white;
  border-radius: 1em;
  background: transparent;
  color: white;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  margin: 1em;

  &:hover {
    border: 1px solid lightGreen;
    color: green;
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }

`;

const typingSub = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaretSub = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }
`;

const GitHubIconWrapper = styled.span`
  margin: 1em;
  &:hover {
    color: orange;
  }
`;

const ScreenIconWrapper = styled.span`
  margin: 1em;
  &:hover {
    color: lightGreen;
  }
`;

const Main = () => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateSubheading, setAnimateSubheading] = useState(false);
  const [animateCover, setAnimateCover] = useState(false);
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
            Full Stack Developer
          </SubHeading>
        </HeadingWrapper>
        <SubSubHeading animate={animateSubSubheading}>
          I create awesome apps with JavaScript.
        </SubSubHeading>

        <ProjectsButtonAnchor href="#projects" animate={animateAnchor}>
          <ProjectsButton>Projects</ProjectsButton>
        </ProjectsButtonAnchor>
      </Hero>
      <ClearanceDiv id="projects" />
      <ProjectsSection>
        <ProjectsHeading>Projects</ProjectsHeading>
        <ProjectsWrapper>
          {projects.map((project) => {
            return (
              <ProjectCard key={project.name}>
                <Image src={project.image} />
                <ProjectCardCover
                  animateCover={animateCover}
                  onMouseOver={() => setAnimateCover(true)}
                  onMouseLeave={() => setAnimateCover(false)}
                >
                  <ProjectCardCoverWrapper>
                    <a href={project.codeLink} target="_blank">
                      <GitHubIconWrapper>
                        <GoMarkGithub />
                      </GitHubIconWrapper>
                      |
                    </a>
                    <a href={project.liveLink} target="_blank">
                      <ScreenIconWrapper>
                        <MdScreenShare />
                      </ScreenIconWrapper>
                    </a>
                  </ProjectCardCoverWrapper>
                  <p>{project.subtitle}</p>
                </ProjectCardCover>
              </ProjectCard>
            );
          })}
        </ProjectsWrapper>
      </ProjectsSection>
      <Bio />
      <Contact />
    </MainWrapper>
  );
};

export default Main;
