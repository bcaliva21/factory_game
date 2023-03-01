import react from 'react'
import styled, { keyframes, css } from 'styled-components'

import down from '../../assets/arrow-down'
import left from '../../assets/arrow-left'
import right from '../../assets/arrow-right'
import up from '../../assets/arrow-up'

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

const Arrow = styled.svg`
    width: 20px;
    height: 20px;
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
            <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d={determineArrow()} />
            </Arrow>
        </ComposableItem>
        )
}

export default Item
