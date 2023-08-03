import styled from "styled-components";

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8em;
  height: 4em;
  margin: auto;
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

const SectionButton = (props) => {
  return <A href={props.href}>{props.children}</A>;
};

export default SectionButton;
