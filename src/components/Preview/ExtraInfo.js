import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 8px;
`;

export default function ExtraInfo({show, children}) {
  if (show) {
    return (
      <Wrapper>
        {children}
      </Wrapper>
    )
  }
  return null
}