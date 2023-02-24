import react from 'react'
import styled, { keyframes, css } from 'styled-components'

const dropToBelt = keyframes`
    0% {
        bottom: 350px;
        right: 0;
    }
    50% {
        bottom: 0;
        right: 0;
    }
    99% {
        bottom: 0;
        right: 100%;
    }
    100% {
        bottom: 0;
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

const Item = ({
    color,
    animation,
}: {
    color: string
    animation: string
}) => {
    return (
        <ComposableItem color={color} animation={animation} />
    )
}

export default Item
