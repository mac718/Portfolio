import styled from "styled-components";
import profile from "../public/profile_pic.jpeg";
import Image from "next/image";

const BioWrapper = styled.div`
  background: black;
  font-family: "Courier New", Courier, monospace;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 7em;
  height: 7em;
  border: 1px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1em;
`;

const BioHeading = styled.div`
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
  margin-bottom: 1em;
`;

const BioText = styled.div`
  width: 75%;
`;

const Bio = () => {
  return (
    <BioWrapper>
      <BioHeading>About</BioHeading>
      <ImageWrapper>
        <Image src={profile} />
      </ImageWrapper>
      <BioText>
        Exercitation voluptate occaecat non deserunt amet eu nulla magna est
        laborum labore nisi magna do. Anim est et nisi eiusmod do id. Nisi
        proident id fugiat est esse consequat magna tempor sunt minim aliqua.
        Nulla labore ad ipsum id enim.
      </BioText>
    </BioWrapper>
  );
};

export default Bio;
