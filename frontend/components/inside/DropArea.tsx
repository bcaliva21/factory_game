import React from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
    height: calc(80vh / 2);
    width: 59vw;
    position: absolute;
    right: calc((100vw / 4));
    top: 30%;
    z-index: 10;
    display: flex;
    justify-content: center;
    background-color: transparent;
`

const DropArea = ({ children }: { children: React.ReactNode }) => (
    <DropContainer id={'drop-container'}>{children}</DropContainer>
)

export default DropArea
