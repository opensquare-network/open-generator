import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;

  span {
    word-break: break-all;
    font-weight: 400;
    font-size: 10px;
    line-height: 20px;
    color: rgba(29, 37, 60, 0.24);
  }

  span > span {
    color: rgba(29, 37, 60, 0.64);
  }
`;

export default function Signature({name, show}) {
  if (show && name) {
    return (
      <Wrapper>
        <span>Edited by <span>{name}</span></span>
      </Wrapper>
    )
  } else {
    return null
  }
}
