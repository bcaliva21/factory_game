import React from 'react'
import styled from 'styled-components'

const DropContainer = styled.div`
    height: 305px;
    width: 1050px;
    position: absolute;
    right: 275px;
    bottom: 100px;
    z-index: 10;
    display: flex;
    justify-content: center;
`

const DropArea = ({ children }: { children: React.ReactNode }) => <DropContainer>{children}</DropContainer>


export default DropArea
