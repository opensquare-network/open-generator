import React from "react";
import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";
import CoverSelector from "./CoverSelector";
import TitleInput from "./TitleInput";
import PreviewBadge from "./PreviewBadge";
import MarkdownEditor from "./MarkdownEditor";
import NonOfficialCheckbox from "./NonOfficialCheckbox";

const Wrapper = styled.div`
  padding: 20px 60px;
  width: 434px;
  overflow-y: auto;
`;

export default function Composer() {
  return (
    <Wrapper>
      <ThemeSelector />
      <CoverSelector />
      <TitleInput />
      <PreviewBadge />
      <MarkdownEditor />
      <NonOfficialCheckbox />
    </Wrapper>
  )
}

