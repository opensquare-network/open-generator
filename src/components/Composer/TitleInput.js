import styled from "styled-components";
import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { titleState } from "../../recoil/atoms";
import { themeColorState } from "../../recoil/selectors";
import Title from "../common/Title";

const Wrapper = styled.div`
  margin-top: 20px;
  textarea:focus {
    border-color: ${p => p.color} !important;
  }
`;

export default function TitleInput() {
  const [, setTitle] = useRecoilState(titleState);
  const onTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const color = useRecoilValue(themeColorState);

  return (
    <Wrapper color={color}>
      <Title title="Title" />
      <Form style={{ marginTop: 8 }}>
        <TextArea
          placeholder="Please fill in your title"
          rows={2}
          onChange={onTitleChange}
        />
      </Form>
    </Wrapper>
  )
}
