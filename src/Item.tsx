import react from 'react'
import styled from 'styled-components'

const RawItem = styled.div<{ color: string }>`
    width: 50px;
    height: 50px;
    background-color: ${({ color }) => color};
`

const Item = () => {
    return <RawItem color="red" />
}

export default Item
