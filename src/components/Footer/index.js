import styled from "styled-components";
import React from "react";
import { ReactComponent as Generator } from './open-generator.svg'
import { ReactComponent as Github } from "./github.svg";

const Footer = styled.footer`
  height: 60px;
  background: #1D253C;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  
  div.meta {
    display: flex;
    align-items: center;
    & > span {
      color: rgba(255, 255, 255, 0.72);
      font-size: 14px;
      line-height: 24px;
      margin-left: 50px;
    }
  }
  
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    opacity: 0.72;
    &:hover {
      opacity: 1;
    }
  }
  
  ul {
    display: inline-flex;
    & > li {
      padding: 0 16px;
    }
  }
`;

export default function PageFooter() {
  return (
    <Footer>
      <div className="meta">
        <Generator />
        <span>Version v0.1</span>
      </div>
      <div className="contacts">
        <ul>
          <li>
            <a
              href="https://github.com/opensquare-network/open-generator"
              target="_blank"
              rel="noreferrer"
            >
              <Github width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>
    </Footer>
  )
}
