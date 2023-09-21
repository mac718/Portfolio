import styled from "styled-components";

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  border: none;
  border-radius: 5px;
  margin: 3px;
  padding: 3px;
  background: var(--white);
  color: var(--black);
  @media (max-width: 600px) {
    height: 20px;
  }
`;

export default Badge;
