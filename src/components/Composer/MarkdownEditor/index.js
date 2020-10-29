import React from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { StyledTextArea } from './Wrapper'
import { useRecoilState, useRecoilValue } from "recoil";
import { contentState } from "../../../recoil/atoms";
import Title from "../../common/Title";
import { themeColorState } from "../../../recoil/selectors";

export default function MarkdownEditor() {
  const [content, setContent] = useRecoilState(contentState);
  const color = useRecoilValue(themeColorState);

  return (
    <StyledTextArea color={color}>
      <Title title="Detail" />
      <ReactMde
        value={content}
        onChange={setContent}
        toolbarCommands={[['bold', 'header', 'link', 'quote', 'strikethrough',
          'code', 'image', 'ordered-list', 'unordered-list']]}
        generateMarkdownPreview={() => {
        }}
      />
    </StyledTextArea>
  )
}
