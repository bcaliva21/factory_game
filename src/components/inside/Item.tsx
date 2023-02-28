import react from 'react'
import styled, { keyframes, css } from 'styled-components'

import down from '../../assets/arrow-down.svg'
import left from '../../assets/arrow-left.svg'
import right from '../../assets/arrow-right.svg'
import up from '../../assets/arrow-up.svg'

const dropToBelt = keyframes`
    0% {
        top: 0;
        right: 0;
    }
    50% {
        top: 100%;
        right: 0;
    }
    99% {
        top: 100%;
        right: 95%;
    }
    100% {
        top: 100%;
        right: 95%;
    }
`

const dropItem = css`
    animation: ${dropToBelt} linear;
    animation-duration: 8s;
    animation-fill-mode: forwards;
`

const Arrow = styled.img`
    position: relative;
`

const ComposableItem = styled.div<{ color: string; animation: string; }>`
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
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
    const determineArrow = () => {
        switch (color) {
            case 'green':
                return up
            case 'red':
                return down
            case 'blue':
                return right
        }
    }
    return (
        <ComposableItem color={color} animation={animation}>
            <Arrow src={determineArrow()} width={20} height={20} />
        </ComposableItem>
        )
}

export default Item
