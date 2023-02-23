import react from 'react'
import styled, { Keyframes, keyframes } from 'styled-components'

const RawItem = styled.div<{ color: string; animation: Keyframes }>`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: ${({ color }) => color};
    animation: ${({ animation }) => animation && animation} ease-out;
    animation-duration: 6s;
`

const Item = ({
    color,
    animation,
}: {
    color: string
    animation: Keyframes
}) => {
    return <RawItem color={color} animation={animation} />
}

export default Item
