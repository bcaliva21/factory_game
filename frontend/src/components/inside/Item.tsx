import React from 'react'
import { useQuery } from '@apollo/client'
import styled, { keyframes, css } from 'styled-components'

// queries
import { GET_DIFFICULTY } from '../../graphql/queries'

// helpers
import { ANIMATION_TIMINGS } from '../utils'

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
    animation-fill-mode: forwards;
`

const Arrow = styled.svg<{ upOrDown: boolean }>`
    width: 20px;
    height: 20px;
    padding-left: ${({ upOrDown }) => (upOrDown ? '8px' : '0')};
`

const ComposableItem = styled.div<{
    color: string
    animation: string
    animationDuration: string
}>`
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ animation }) => animation === 'drop' && dropItem}
    animation-duration: ${({ animationDuration }) => animationDuration};
`

const Item = ({
    color,
    animation,
    id,
}: {
    color: string
    animation: string
    id: string
}) => {
    const { data, loading, error } = useQuery(GET_DIFFICULTY)

    if (error) console.log('handle error')
    if (loading) console.log('still loading...')

    const difficulty = data.difficulty
    const animationDuration = ANIMATION_TIMINGS[difficulty]

    const determineArrowSVG = () => {
        switch (color) {
            case 'green':
                return up
            case 'red':
                return down
            case 'blue':
                return right
            case 'yellow':
                return left
        }
    }

    const isUpOrDownArrow = () => color === 'green' || color === 'red'

    return (
        <ComposableItem
            animationDuration={animationDuration}
            id={id}
            color={color}
            animation={animation}
            style={{ stroke: color }}
        >
            <Arrow
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                upOrDown={isUpOrDownArrow()}
                color={color}
            >
                <path d={determineArrowSVG()} />
            </Arrow>
        </ComposableItem>
    )
}

export default Item
