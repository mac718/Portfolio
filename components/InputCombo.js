import styled from "styled-components";

const Input = styled.input`
  background: black;
  border: 1px solid white;
  width: 80%;
  color: white;
  font-family: "Courier New", Courier, monospace;
  height: 2.5em;
`;

const TextArea = styled.textarea`
  background: black;
  border: 1px solid white;
  width: 80%;
  color: white;
  font-family: "Courier New", Courier, monospace;
  height: 10em;
`;

const InputLabel = styled.label`
  color: white;
  text-align: left;
  margin-bottom: 1em;
  display: block;
  width: 80%;
  margin: 0 auto 1em auto;
`;

const ComboWrapper = styled.div`
  width: 100%;
  margin: 0 auto 1.5em auto;
  text-align: center;
`;

const InputCombo = (props) => {
  return (
    <ComboWrapper>
      <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
      {props.area ? (
        <TextArea
          id={props.label}
          name={props.label}
          type={props.type}
          height={props.height}
        />
      ) : (
        <Input
          id={props.label}
          name={props.label}
          type={props.type}
          height={props.height}
        />
      )}
    </ComboWrapper>
  );
};

export default InputCombo;
