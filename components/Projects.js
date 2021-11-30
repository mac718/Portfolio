import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { MdScreenShare } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { projects } from "../data";

const SectionButton = styled.button`
  width: 8em;
  height: 4em;
  border: 1px solid white;
  border-radius: 1em;
  background: transparent;
  color: white;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
`;

const ProjectsSection = styled.section`
  width: 100%;
  background: black;
  height: 100%;
  margin-bottom: 5em;
  text-align: center;
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

const ProjectsHeading = styled.div`
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
`;

const Projects = () => {
  const [animateCover, setAnimateCover] = useState(false);
  return (
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
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <GitHubIconWrapper>
                      <GoMarkGithub />
                    </GitHubIconWrapper>
                    |
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
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
      <a href="#repos">
        <SectionButton>Recent Repos</SectionButton>
      </a>
    </ProjectsSection>
  );
};

export default Projects;
