import { useEffect, useState } from "react";
import styled from "styled-components";
import { MdEast } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const RecentReposSection = styled.section`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ReposWrapper = styled.section`
  width: 90%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px 10px;
  margin: auto;
`;

const RepoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  box-shadow: 3px 3px 5px gray;
`;

const Title = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  color: white;
  font-size: 1.755em;
`;

const Description = styled.div`
  font-family: "Courier New", Courier, monospace;
  color: lightGray;
  font-size: 1.5em;
`;

const RepoLink = styled.div`
  font-family: "Courier New", Courier, monospace;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  display: inherit;
`;

const RepoLinkAnchor = styled.a`
  display: inherit;
`;

const ArrowSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
`;

const RecentReposHeading = styled.div`
  color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-size: 3em;
  margin-bottom: 1em;
`;

const RecentRepos = ({ repos }) => {
  //const [repos, setRepos] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mac718/repos?sort=updated", {
  //     headers: {
  //       Authorization: `token ${process.env.NEXT_PUBLIC_PAT}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setRepos(json.slice(0, 6)))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <RecentReposSection>
      <RecentReposHeading>Recent Repos</RecentReposHeading>
      <ReposWrapper>
        {repos.map((repo) => (
          <RepoCard>
            <Title>{repo.name}:</Title>
            <Description>{repo.description}Derka derka</Description>
            <RepoLink>
              <RepoLinkAnchor href={repo.html_url}>
                View Repository{" "}
                <ArrowSpan>
                  <MdEast />
                </ArrowSpan>
              </RepoLinkAnchor>
            </RepoLink>
          </RepoCard>
        ))}
      </ReposWrapper>
    </RecentReposSection>
  );
};

export default RecentRepos;
