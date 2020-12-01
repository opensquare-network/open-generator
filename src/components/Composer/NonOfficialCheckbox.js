import React from "react";
import styled from "styled-components";
import { Checkbox } from "semantic-ui-react";
import { useRecoilState } from "recoil";

import Title from "../common/Title";
import { nonOfficialState } from "../../recoil/atoms";

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default function NonOfficialCheckbox() {
  const [nonOfficial, setNonOfficial] = useRecoilState(nonOfficialState);
  const onToggle = () => {
    setNonOfficial(!nonOfficial);
  };

  return (
    <Wrapper>
      <Title title="Other" />
      <Checkbox
          label="Show non-official claim"
          onChange={onToggle}
          checked={nonOfficial} />
    </Wrapper>
  )
}