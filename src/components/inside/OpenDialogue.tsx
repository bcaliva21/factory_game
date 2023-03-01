import react from 'react'
import styled from 'styled-components'

const DialogueContainer = styled.div`
    width: 30%;
    height: 40%;
    position: absolute;
    background-color: red;
    top: 20%;
    left: 35%;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 20px;
    padding: 10px 0 5px 10px;
`

const Text = styled.div`
    width: 100%;
    height: fit-content;
    font-size: 15px;
    padding: 10px 0 10px 10px;
`

const ControlsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 25%;
    background-color: white;
    bottom: 0;
`

const OpenDialogue = () => {
    // <span>.</span>
    // <span>.</span>
    return (
        <DialogueContainer>
            <Title>Welcome to factory_game</Title>
            <Text>
                Push ←↑→↓ to keep the conveyor belt clean
            </Text>
            <Text>
                Any mistake will be fatal to the factory.
            </Text>
            <Text>
                Good luck!
            </Text>
            <Text>
                Press the CPU power button to start
            </Text>
            <ControlsContainer>
                <button>close</button>
            </ControlsContainer>
        </DialogueContainer>
    )
}

export default OpenDialogue
