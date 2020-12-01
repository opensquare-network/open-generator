import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 14px;

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    color: rgba(29, 37, 60, 0.24);
  }

  span > span {
    color: rgba(29, 37, 60, 0.64);
  }
`;

export default function Footer({name, show}) {
  if (show && name) {
    return (
      <Wrapper>
        <span>Edit by <span>{name}</span></span>
      </Wrapper>
    )
  } else {
    return null
  }
}
