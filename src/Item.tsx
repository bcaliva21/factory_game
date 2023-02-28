import react from 'react'
import styled, { keyframes, css } from 'styled-components'

import down from './assets/arrow-down.svg'
import left from './assets/arrow-left.svg'
import right from './assets/arrow-right.svg'
// @ts-ignore
import up from './assets/arrow-up.svg'

const dropToBelt = keyframes`
    0% {
        top: 0;
        right: 0;r
    }
    50% {
        top: 100%;
        right: 0;
    }
    99% {
        top: 100%;
        right: 100%;
    }
    100% {
        top: 100%;
        right: 100%;
        display: none;
        visibility: hidden;
    }
`

const dropItem = css`
    animation: ${dropToBelt} linear;
    animation-duration: 8s;
    animation-fill-mode: forwards;
`

const ComposableItem = styled.div<{ color: string; animation: string; }>`
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: ${({ color }) => color};
    ${({ animation }) => 
        animation === 'drop' && dropItem}
`

const Arrow = styled.img`
    // height: 20px;
    // width: 20px;
    position: absolute;
    top: 7px;
    left: 6px;
`

const Item = ({
    color,
    animation,
}: {
    color: string
    animation: string
}) => {
    return (
        <ComposableItem color={color} animation={animation}>
            <Arrow src={up} width={20} height={20} />
        </ComposableItem>
        )
}

export default Item
