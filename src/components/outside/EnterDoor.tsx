import React from 'react'
import styled, { css } from 'styled-components'

const EnterDoorContainer = styled.div`
    width: calc(100vw / 8);
    height: calc(100vh / 4.5);
    position: absolute;
    bottom: 1.5%;
    right: 10vw;
`

const LeftDoor = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    left: 5%;
    display: none;
    background-color: #901000;
`

const LeftDoorMask = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    left: 5%;
    background-color: #901000;
`

const RightDoor = styled.div`
    width: 45%;
    height: 85%;
    position: absolute;
    top: 7%;
    right: 5%;
    background-color: #901000;
`

const LeftDoorVerticalLine = styled.div`
    height: 80%;
    width: 0;
    border: 1px solid black;
    position: absolute;
    top: 10%;
    right: 20%;
    display: none;
`

const KnobContainer = styled.div`
    height: 20%;
    width: 15%;
    position: absolute;
    top: 40%;
    left: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
`

const InsideMiddle = styled.div`
    width: 10%;
    height: 90%;
    background-color: black;
    position: absolute;
    left: 40%;
    z-index: 100;
    display: none;
`

const InsideTop = styled.div`
    position: absolute;
    top: 5%;
    left: 3%;
    border-right: calc(100vw / 50) solid transparent;
    border-left: calc(100vw / 50) solid black;
    border-bottom: calc(100vw / 180) solid black;
    border-top: calc(100vw / 180) solid transparent;
    transform: rotate(180deg);
    z-index: 100;
    display: none;
`

const InsideBot = styled.div`
    position: absolute;
    bottom: 5%;
    left: 1%;
    border-right: calc(100vw / 45) solid transparent;
    border-left: calc(100vw / 45) solid black;
    border-bottom: calc(100vw / 160) solid black;
    border-top: calc(100vw / 160) solid transparent;
    transform: scaleX(-1);
    z-index: 100;
    display: none;
`

const LoginOrSignup = styled.div`
	width: 100%;
	margin-top: 5%;
	height: 100%;
	z-index: 50;
	opacity: 0.5;
	display: none;
	flex-direction: column;
`

const hoverMagic = css`
	    &:hover {
        cursor: pointer;
        ${LeftDoor} {
            display: block;
        }
        ${KnobContainer} {
            display: none;
        }
        ${LeftDoorVerticalLine} {
            display: block;
        }
        ${InsideTop} {
            display: block;
        }
        ${InsideMiddle} {
            display: block;
        }
        ${InsideBot} {
            display: block;
        }
    }

`

const loginSetup = css`
	&:hover {
		${LoginOrSignup} {
			display: flex;
		}
	}
`

const DoorFrame = styled.div<{ hasAuth: boolean }>`
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 100%;
    height: 80%;
    border: 2px solid black;
    border-bottom: none;
    background-color: #ffd700;
    display: flex;
    align-items: center;
    justify-content: center;
	${({ hasAuth }) => hasAuth ? hoverMagic : loginSetup }
 `

const KnobCase = styled.div`
    width: 40%;
    height: 80%;
    background-color: black;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Knob = styled.div`
    width: 90%;
    height: 40%;
    background-color: white;
    z-index: 15;
    border-radius: 50%;
`

const OpenKnobContainer = styled.div`
    height: 20%;
    width: 15%;
    position: absolute;
    top: 40%;
    right: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OpenKnobCase = styled.div`
    width: 40%;
    height: 80%;
    background-color: black;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OpenKnob = styled.div`
    width: 90%;
    height: 40%;
    background-color: white;
    z-index: 15;
    border-radius: 50%;
`

const adjustRight = css`
    position: absolute;
    top: 3%;
    right: 3%;
`

const adjustLeft = css`
    position: absolute;
    top: 3%;
    left: 3%;
`

const VerticalLine = styled.div<{ right?: string; left?: string }>`
    height: 90%;
    border: 2px solid black;
    ${({ right }) => right && adjustRight}
    ${({ left }) => left && adjustLeft}
    z-index: 200;
`

const HorizontalTop = styled.div`
    position: absolute;
    top: 3%;
    width: 90%;
    border: 3px solid black;
`

const HorizontalBot = styled.div`
    position: absolute;
    bottom: -4%;
    width: 106%;
    border: 8px solid black;
`

const DoorBarLock = styled.div`
    position: absolute;
    top: 40%;
    height: 30px;
    width: 112%;
    background-color: black;
    z-index: 50;
`

const DoorToBuildingAttachmentLeft = styled.div`
    height: 160%;
    width: 10px;
    background-color: red;
    position: absolute;
    left: -4%;
    top: -30%;
`

const DoorToBuildingAttachmentRight = styled.div`
    height: 160%;
    width: 10px;
    background-color: red;
    position: absolute;
    right: -4%;
    top: -30%;
`


const Barrier = styled.div`
	height: 30%;
	width: 100%;
`

const ActionContainer = styled.div`
	width: 100%;
	height: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`

const DoorButton = styled.button`
	width: 79%;
	height: 80%;
	&:hover {
		cursor: pointer;
	}
	color: white;
	font-size: 16px;
	background-color: transparent;
	border: none;
`

const EnterDoor = ({ handleEnter }: { handleEnter: () => void }) => {
	const userHasAuth = false
	// const userHasAuth: boolean = someMagicFromApollo() 
    // if (userHasAuth) {
    // 	disable onMouseEnter
    // 	enable onClick
    // }

    // if (!userHasNoAuth) {
    // 	disbable onClick
    // 	enable onMouseEnter
    // }

    return (
        <EnterDoorContainer>
            <DoorFrame
				hasAuth={userHasAuth}
				onClick={() => userHasAuth ? handleEnter : () => console.log('no auth')}
				onMouseEnter={() => userHasAuth ? console.log('click to enter signup') : console.log('has auth')}
            >
		<LoginOrSignup >
			<ActionContainer>
				<DoorButton>
					Login
				</DoorButton>
			</ActionContainer>
			<Barrier />
			<ActionContainer>
				<DoorButton>
					Signup
				</DoorButton>
			</ActionContainer>
		</LoginOrSignup >
                <DoorBarLock>
                    <DoorToBuildingAttachmentLeft />
                    <DoorToBuildingAttachmentRight />
                </DoorBarLock>
                <InsideMiddle />
                <InsideTop />
                <InsideBot />
                <LeftDoorMask />
                <LeftDoor>
                    <LeftDoorVerticalLine />
                    <OpenKnobContainer>
                        <OpenKnobCase>
                            <OpenKnob />
                        </OpenKnobCase>
                    </OpenKnobContainer>
                </LeftDoor>
                <RightDoor />
                <KnobContainer>
                    <KnobCase>
                        <Knob />
                    </KnobCase>
                </KnobContainer>
                <VerticalLine />
                <VerticalLine right={'right'} />
                <VerticalLine left={'left'} />
                <HorizontalTop />
                <HorizontalBot />
            </DoorFrame>
        </EnterDoorContainer>
    )
}

export default EnterDoor
