import styled from "styled-components";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { useState } from "react";
import SocialIcons from "./UI/SocialIconsNav";
import axios from "axios";

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
  @media (max-width: 876px) {
    display: flex;
    flex-direction: column;
    padding: 1em;
    height: auto;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;

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
  @media (max-width: 876px) {
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

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

const SuccessMessage = styled.div`
  color: lightGreen;
  font-weight: bold;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://formspree.io/f/xgedwzvg",
      data: { name, email, message },
    })
      .then((res) => {
        handleServerResponse(true, "Thanks!, Your message has been submitted.");
      })
      .catch((error) => handleServerResponse(false, error.response.data.error));
  };

  return (
    <div>
      <ContactFormHeading>Contact</ContactFormHeading>
      <ContactSection>
        <Info>
          <div>
            <InfoHeading>Let&apos;s Talk!</InfoHeading>
            <InfoSubheading>
              Fill in the details and I&apos;ll get back to you as soon as
              possible.
            </InfoSubheading>
          </div>
          <DetailsList>
            <Detail>
              <MdEmail />
              <DetailSpan>mac718@gmail.com</DetailSpan>
            </Detail>
            <Detail>
              <MdPhone />
              <DetailSpan>347-268-1741</DetailSpan>
            </Detail>
            <Detail>
              <MdLocationOn />
              <DetailSpan>Portland (Cedar Hills), OR</DetailSpan>
            </Detail>
          </DetailsList>
          <SocialIcons />
        </Info>
        <ContactForm netlify onSubmit={handleSubmit}>
          <ComboWrapper>
            <InputLabel htmlFor="Name">Name</InputLabel>
            <Input
              type="text"
              name="Name"
              id="Name"
              onChange={handleNameChange}
              value={name}
            />
          </ComboWrapper>
          <ComboWrapper>
            <InputLabel htmlFor="Email">Email</InputLabel>
            <Input
              type="email"
              name="Email"
              id="Email"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </ComboWrapper>
          <ComboWrapper>
            <InputLabel htmlFor="Message">Message</InputLabel>
            <TextArea
              name="Message"
              id="Message"
              onChange={handleMessageChange}
              value={message}
              required
            />
          </ComboWrapper>
          <Submit type="submit">Send Message</Submit>
          {status.info.error && (
            <ErrorMessage>Error: {status.info.msg}</ErrorMessage>
          )}
          {!status.info.error && status.info.msg && (
            <SuccessMessage>{status.info.msg}</SuccessMessage>
          )}
        </ContactForm>
      </ContactSection>
    </div>
  );
};

export default Contact;
