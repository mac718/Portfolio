import Main from "../components/Main";
export default function Home({ repos }) {
  return <Main repos={repos} />;
}

export async function getServerSideProps(context) {
  let res = await fetch(
    "https://api.github.com/users/mac718/repos?sort=updated",
    {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_PAT}`,
      },
    }
  );
  let repos = await res.json();
  repos = repos.slice(0, 6);

  if (!repos) {
    console.log("error");
  }

  return { props: { repos } };
}
