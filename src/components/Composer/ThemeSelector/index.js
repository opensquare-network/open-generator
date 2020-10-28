import React from "react";
import styled from "styled-components";
import Title from "../../common/Title";
import { Dropdown } from "semantic-ui-react";
import options from "./options";
import { themeColorState } from "../../../recoil/selectors";
import { useRecoilState, useRecoilValue } from "recoil";
import { defaultToken, isVerticalState, tokenState } from "../../../recoil/atoms";
import Style from './style'

const Wrapper = styled.section`
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #1D253C;
  }
  
  div.select {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }
`;

const StyledDropDown = styled(Dropdown)`
  display: inline-flex !important;
  height: 44px;
  align-items: center !important;
  
  &:focus {
    border-color: ${p => p.color} !important;
    
    .menu {
      border-color: ${p => p.color} !important;
    }
  }
  
  i {
    top: unset !important;
  }
`;

export default function ThemeSelector() {
  const defaultValue = (options.find(option => option.key === defaultToken) || {}).value;
  const color = useRecoilValue(themeColorState);
  const [, setToken] = useRecoilState(tokenState);
  const isVertical = useRecoilValue(isVerticalState);

  return (
    <Wrapper>
      <Title title="Theme" />
      <div className="select">
        <StyledDropDown
          color={color}
          options={options}
          defaultValue={defaultValue}
          selection
          onChange={(v, d) => {
            const token = String(d.value);
            setToken(token);
          }} />
        <Style active={isVertical} />
        <Style active={!isVertical} vertical={false} />
      </div>
    </Wrapper>
  )
}
