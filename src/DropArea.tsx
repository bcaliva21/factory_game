import React from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
    height: 350px;
    width: 250px;
    position: absolute;
    right: 175px;
    bottom: 69px;
    z-index: 4;
    display: flex;
    justify-content: center;
`

const DropArea = ({ children }: { children: React.ReactNode }) => (
    <DropContainer>{children}</DropContainer>
)

export default DropArea
