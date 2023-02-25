import React from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
    height: calc(100vw / 3);
    width: 60vw;
    position: absolute;
    right: calc((80vw / 12));
    top: 350px;
    z-index: 10;
    display: flex;
    justify-content: center;
    background-color: transparent;
`

const DropArea = ({ children }: { children: React.ReactNode }) => <DropContainer>{children}</DropContainer>

export default DropArea
