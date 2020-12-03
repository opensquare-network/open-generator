import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  float: right;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: rgba(29, 37, 60, 0.24);
`

export default function NonOfficialClaim({show}) {
  if (show) {
    return (
      <Wrapper>
        Non-official Claim
      </Wrapper>
    )
  }
  return null;
}