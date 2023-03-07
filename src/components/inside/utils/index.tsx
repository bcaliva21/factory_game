import styled from 'styled-components'

// constants
export const RGBArray = ['red', 'blue', 'green', 'yellow']

// styled components
export const TinyItem = styled.div<{ color: string; }>`
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color };
    margin-right: 1px;
`

export const MiniItem = styled.div<{ color: string; }>`
    width: 5px;
    height: 5px;
    background-color: ${({ color }) => color };
    margin-right: 1px;
`


// helper functions
export const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 4)
    return RGBArray[randomIndex]
}
