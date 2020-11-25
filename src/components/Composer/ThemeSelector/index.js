import React from "react";
import styled from "styled-components";
import Title from "../../common/Title";
import { Dropdown } from "semantic-ui-react";
import options from "./options";
import { secondaryThemeColorState, themeColorState } from "../../../recoil/selectors";
import { useRecoilState, useRecoilValue } from "recoil";
import { bannerState, defaultToken, getDefaultBannerUrls, isVerticalState, tokenState } from "../../../recoil/atoms";
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
  const secondaryColor = useRecoilValue(secondaryThemeColorState);
  const [, setToken] = useRecoilState(tokenState);
  const [, setBanner] = useRecoilState(bannerState);
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
            window.localStorage.setItem('token', token);
            setBanner(getDefaultBannerUrls(token, isVertical)[0])
          }} />
        <Style active={isVertical} color={color} secondaryColor={secondaryColor} />
        <Style active={!isVertical} vertical={false} color={color} secondaryColor={secondaryColor} />
      </div>
    </Wrapper>
  )
}
