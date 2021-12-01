import styled from "styled-components";

const ProjectCard = styled.div`
  background: black;
  width: 50%;
  margin: 1em;
  position: relative;
  background: gray;
  border-radius: 5px;
  box-shadow: 5px 5px #011;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export default ProjectCard;
