import styled from "styled-components";

const RecentReposSection = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px 10px;
`;

const RepoCard = styled.div`
  background: green;
`;

const RecentRepos = () => {
  return (
    <RecentReposSection>
      {[1, 2, 3].map((num) => (
        <RepoCard>{num}</RepoCard>
      ))}
    </RecentReposSection>
  );
};

export default RecentRepos;
