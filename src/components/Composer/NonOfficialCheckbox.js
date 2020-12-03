import React from "react";
import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";
import { useRecoilState } from "recoil";

import Title from "../common/Title";
import { nonOfficialState } from "../../recoil/atoms";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export default function NonOfficialCheckbox() {
  const [nonOfficial, setNonOfficial] = useRecoilState(nonOfficialState);
  const onToggle = () => {
    setNonOfficial(!nonOfficial);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title title="Non-official Claim" />
        <Checkbox slider checked={nonOfficial} onChange={onToggle} />
      </TitleWrapper>
    </Wrapper>
  )
}