import react from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
    height: 350px;
    width: 250px;
    position: absolute;
    background-color: white;
    right: 175px;
    bottom: 69px;
    z-index: 50;
`

const DropArea = () => {
    return <DropContainer></DropContainer>
}

export default DropArea
