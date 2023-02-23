import react from 'react'
import styled from 'styled-components'

const RawItem = styled.div<{ color: string }>`
    width: 50px;
    height: 50px;
    background-color: ${({ color }) => color};
`

const Item = ({ color }: { color: string }) => {
    return <RawItem color={color} />
}

export default Item
