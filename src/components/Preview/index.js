import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isVerticalState } from "../../recoil/atoms";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard"
import { ReactComponent as Download } from './download.svg'
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from 'uuid';

import { testImgSrc } from "../../utils"

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  
  flex: 1;
  padding: 10px;
  
  overflow-x: hidden;

  background: #EEEEEE;
  
  svg.download {
    position: fixed;
    right: 30px;
    bottom: 60px;
    cursor: pointer;
  }
`;

export default function Preview() {
  const isVertical = useRecoilValue(isVerticalState);

  const downloadImg = async () => {
    const element = window.document.querySelector(isVertical ? '#vertical-card' : '#horizontal-card');
    if (!element) {
      return
    }

    const imgs = element.querySelector('.content').querySelectorAll('img')
    const imgArray = Object.values(imgs)
    await Promise.all(imgArray.map(async item => {
      item.src = await testImgSrc(item.src)
    }))

    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 10,
      allowTaint: true
    });
    const img = canvas.toDataURL("image/png");

    const btn = document.createElement("a");
    btn.href = img;

    const uuid = uuidv4();
    const id = uuid.split('-')[0];
    btn.download = `OpenSquare-${id}.png`;
    btn.id = "downloadHref";
    document.body.appendChild(btn);
    btn.click();
    btn.remove();
  };

  return (
    <Wrapper>
      {
        isVertical ? <VerticalCard /> : <HorizontalCard />
      }
      <Download className="download" onClick={downloadImg} />
    </Wrapper>
  )
}
