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
  margin-bottom: 5em;
  font-size: 1.25em;
  line-height: 1.5;
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
        My current home is Portland, OR, but I was born and rasied in Brooklyn,
        NY. In college (NYU), I considered majoring in math, but opted for
        Classics with a math minor instead, as I had always been a
        &ldquo;humanitites person&ldquo; and was more comfortable in that
        context. I went on to postbaccalaureate study at Columbia, followed by
        four years of graduate study at CUNY, Graduate Center, after which I
        left the program. While in graduate school, I started a handmade soap
        business on the side to generate extra income. After relinquishing
        academia, I focused my attention on my business full-time, which
        I&apos;ve been immersed in ever since. It&apos;s been an interesting and
        largely fulfilling journey as a small-time entrepreneur, but I&apos;ve
        long missed the intellectual rigor of graduate study. When I tried some
        free Code Academy courses on a lark a few years ago, I was immediately
        hooked. Since then, I&apos;ve been spending every spare moment schooling
        myself in the ways of modern web development. I truly love the process
        of solving the myriad challenges involved in bringing the kernel of an
        idea to concrete fruition in the form of a web application. I feel
        I&apos;ve finally found my vocation.
      </BioText>
    </BioWrapper>
  );
};

export default Bio;
