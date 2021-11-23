import styled from "styled-components";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import InputCombo from "./InputCombo";
import { useState } from "react";

const ContactSection = styled.section`
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  padding-left: 5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: auto;
  }
`;

const Info = styled.div``;

const InfoHeading = styled.div`
  font-size: 2em;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const InfoSubheading = styled.h4`
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const DetailsList = styled.ul`
  list-style-type: none;
  margin-top: 5em;
`;

const Detail = styled.li`
  margin: 2em;
`;

const DetailSpan = styled.span`
  margin-left: 1em;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5em;
  margin-bottom: 2em;
  padding: 2em;
  border: 1px solid white;
  border-radius: 1em;
  height: 90%;
  @media (max-width: 500px) {
    margin: 1em;
  }
`;

const ContactFormHeading = styled.div`
  font-size: 3em;
  text-align: center;
  margin-bottom: 1.5em;
  color: white;
  font-family: "Courier New", Courier, monospace;
`;

const Submit = styled.button`
  border: 1px solid white;
  background: black;
  color: white;
  width: 50%;
  height: 3em;
  font-family: "Courier New", Courier, monospace;
  border-radius: 1em;
  font-size: 1.5em;
  cursor: pointer;
  margin-top: 1em;
  &:hover {
    background: white;
    color: black;
  }
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getName = (name) => {
    setName(name);
    console.log(name);
  };
  const getEmail = (email) => {
    setEmail(email);
  };
  const getMessage = (message) => {
    setMessage(message);
  };
  return (
    <>
      <ContactFormHeading>Contact</ContactFormHeading>
      <ContactSection>
        <Info>
          <InfoHeading>Let's Talk!</InfoHeading>
          <InfoSubheading>
            Fill in the details and I'll get back to you as soon as possible.
          </InfoSubheading>
          <DetailsList>
            <Detail>
              <MdEmail />
              <DetailSpan>mac718@gmail.com</DetailSpan>
            </Detail>
            <Detail>
              <MdPhone />
              <DetailSpan>347-269-1741</DetailSpan>
            </Detail>
            <Detail>
              <MdLocationOn />
              <DetailSpan>Portland (Cedar Hills), OR</DetailSpan>
            </Detail>
          </DetailsList>
        </Info>
        <ContactForm>
          <InputCombo
            label="Name"
            type="text"
            area={false}
            required={false}
            stateFn={getName}
          />
          <InputCombo
            label="Email"
            type="email"
            area={false}
            required={true}
            stateFn={getEmail}
          />
          <InputCombo
            label="Message"
            type="text"
            area={true}
            required={true}
            stateFn={getMessage}
          />
          <Submit>Send Message</Submit>
        </ContactForm>
      </ContactSection>
    </>
  );
};

export default Contact;
