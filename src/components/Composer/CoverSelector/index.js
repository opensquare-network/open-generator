import { coversState, themeColorState } from "../../../recoil/selectors";
import { useRecoilValue, useRecoilState } from "recoil";
import React from "react";
import styled from "styled-components";
import Title from "../../common/Title";
import chunk from "lodash.chunk"
import { Image } from "semantic-ui-react";
import { bannerState, isVerticalState } from "../../../recoil/atoms";

const Wrapper = styled.section`
  margin-top: 20px;
  
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    margin-top: 11px;
    img {
      height: ${p => !p.isVertical ? 100 : 46}px !important;
      width: ${p => !p.isVertical ? 46 : 100}px !important;
      cursor: pointer;
      border-radius: 6px;
      
      &:not(:first-of-type) {
        margin-left: 11px;
      }
      
      border: 2px solid white;
      padding: 1px;
      
      &.active {
        border-color: ${p => p.color};
      }
    }
  }
`;

export default function CoverSelector() {
  const covers = useRecoilValue(coversState);
  console.log('covers=');
  console.log(covers);
  const isVertical = useRecoilValue(isVerticalState);
  const chunks = chunk(covers, isVertical ? 3 : 5);
  const [banner, setBanner] = useRecoilState(bannerState);
  const color = useRecoilValue(themeColorState);

  return (
    <Wrapper isVertical={isVertical} color={color}>
      <Title title="Cover" />
      <ul>
        {
          chunks.map((urls, idx) => {
            return (
              <li key={idx}>
                {
                  urls.map((url, idx) => {
                    return <Image
                      className={url === banner ? 'active' : ''}
                      key={idx}
                      size="medium"
                      src={url}
                      onClick={() => setBanner(url)}
                    />
                  })
                }
              </li>
            )
          })
        }
      </ul>
    </Wrapper>
  )
}
