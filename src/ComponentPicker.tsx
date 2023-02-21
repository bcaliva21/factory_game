import React from 'react'
import styled, { keyframes } from 'styled-components'

const ComponentPickerContainer = styled.div`
    position: absolute;
    background-color: yellow;
    width: 100%;
    height: 30%;
    bottom: 0;
`

const slideIn = keyframes`{
    from {
      transform: translateX(0%);
    }
  
    to {
      transform: translateX(100%);
    }
  }
`

const SlideInAsset = styled.div`
    position: absolute;
    background-color: transparent;
    border: 5px dashed black;
    width: 90%;
    top: -100%;
    left: 6%;
    z-index: 105;
    animation: ${slideIn};
    animation-duration: 3s;
`

const ComponentPicker = () => {

    return (
        <ComponentPickerContainer>
            <SlideInAsset />
        </ComponentPickerContainer >
    )
}

export default ComponentPicker
