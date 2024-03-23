import React from 'react';
import { styled } from 'styled-components';

function Icon(props) {
  return (
    <IconWrap size={props.size} className={`icon-${props.icon}`}>
        {/* https://wunhui.github.io/my-pofol */}
    </IconWrap>
  )
}

export default Icon;

const IconWrap = styled.i`
    display: inline-block;
    width:  ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    &.icon-arrow {
        background: url("https://wunhui.github.io/birth-day/images/icon-arrow.png") no-repeat center / contain;
        transform: rotate(90deg);
    }
    &.icon-bookmark {
        background: url("https://wunhui.github.io/birth-day/images/icon-bookmark.png") no-repeat center / contain;
    }
    &.icon-chat {
        background: url("https://wunhui.github.io/birth-day/images/icon-chat.png") no-repeat center / contain;
    }
    &.icon-heart {
        background: url("https://wunhui.github.io/birth-day/images/icon-heart.png") no-repeat center / contain;
    }
    &.icon-heart_full {
        background: url("https://wunhui.github.io/birth-day/images/icon-heart_full.png") no-repeat center / contain;
    }
    &.icon-send {
        background: url("https://wunhui.github.io/birth-day/images/icon-send.png") no-repeat center / contain;
    }
`