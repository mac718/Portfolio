import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import { MdScreenShare } from "react-icons/md";
import ProjectCard from "./UI/ProjectCard";
import Image from "next/image";
import { projects } from "../data";
import SectionButton from "./UI/SectionButton";
import Badge from "./UI/Badge";

const ProjectsSection = styled.section`
  width: 100%;
  background: var(--black);
  height: 100vh;
  margin-bottom: 5em;
  text-align: center;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: var(--black);

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {opacity: 1;}
`;

const ProjectCardCover = styled.div`
  position: absolute;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-family: "Courier New", Courier, monospace;
  &:hover {
    animation: ${css`
      ${fadeIn} 0.5s forwards
    `};
  }
  @media (max-width: 1000px) {
    opacity: 1;
    &:hover {
    }
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
  color: var(--white);
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
`;

const ToolTipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: var(--white);
  color: var(--black);
  text-align: center;
  font-size: 15px;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

const ToolTip = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${ToolTipText} {
    transition: visibility 0s linear 1s;
    visibility: visible;
  }
`;

const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
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
              <Image src={project.image} alt="project image" layout="fill" />
              <ProjectCardCover
                animateCover={animateCover}
                onMouseOver={() => setAnimateCover(true)}
                onMouseLeave={() => setAnimateCover(false)}
              >
                <ProjectCardCoverWrapper>
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <ToolTip>
                      <ToolTipText>GitHub Repo</ToolTipText>
                      <GitHubIconWrapper>
                        <GoMarkGithub />
                      </GitHubIconWrapper>
                    </ToolTip>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <ToolTip>
                      <ToolTipText>Live Site</ToolTipText>
                      <ScreenIconWrapper>
                        <MdScreenShare />
                      </ScreenIconWrapper>
                    </ToolTip>
                  </a>
                </ProjectCardCoverWrapper>
                <h2>{project.name}</h2>
                <p>{project.subtitle}</p>
                <BadgeWrapper>
                  {project.technologies.map((tech) => (
                    <Badge>{tech}</Badge>
                  ))}
                </BadgeWrapper>
              </ProjectCardCover>
            </ProjectCard>
          );
        })}
      </ProjectsWrapper>

      <SectionButton href="#repos">Recent Repos</SectionButton>
    </ProjectsSection>
  );
};

export default Projects;
