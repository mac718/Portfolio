import styled from "styled-components";

const Button = styled.button`
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

const SectionButton = (props) => {
  return <Button>{props.children}</Button>;
};

export default SectionButton;
