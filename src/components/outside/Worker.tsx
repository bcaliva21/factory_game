import react from 'react'
import styled, { keyframes } from 'styled-components'

const WorkerContainer = styled.div`
    width: 100%;
    height: 100%;
`
const Head = styled.div`
    background-color: white;
    border-radius: 50%;
    width: 35%;
    height: 25%;
    position: relative;
    margin: auto;
    margin-top: 2%;
    border-top: calc(100vw / 125) solid #ffd700;
`

const HatRidge = styled.div`
    background-color: #ffd700;
    position: absolute;
    top: 0;
    left: -5%;
    width: 110%;
    height: 20%;
`

const SafetyGoggles = styled.div`
    height: 30%;
    width: 80%;
    position: absolute;
    top: 25%;
    left: 10%;
`

const LeftLens = styled.div`
    width: 40%;
    height: 100%;
    position: absolute;
    left: 3%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-right: 1px solid black;
    border-left: 1px solid black;
    background-color: #e8f4f8;
`

const RightLens = styled.div`
    width: 40%;
    height: 100%;
    position: absolute;
    right: 3%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-right: 1px solid black;
    border-left: 1px solid black;
    background-color: #e8f4f8;
`

const LeftWing = styled.div`
    width: 20%;
    height: 10%;
    position: absolute;
    left: -15%;
    top: 5%;
    background-color: black;
`
// background-color: black;

const RightWing = styled.div`
    width: 20%;
    height: 10%;
    position: absolute;
    right: -10%;
    top: 5%;
    background-color: black;
`

const Torso = styled.div`
    width: 35%;
    height: 35%;
    margin: auto;
    position: relative;
    background-color: #901000;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    z-index: 10;
`

const TorsoPocket = styled.div`
    position: absolute;
    width: 20%;
    height: 30%;
    background-color: #ffd700;
    right: 15%;
    top: 25%;
    border-bottom-right-radius: 30%;
    border-bottom-left-radius: 30%;
`

const LeftUpperArm = styled.div`
    width: 25%;
    height: 70%;
    transform: rotate(120deg);
    position: absolute;
    left: -20%;
    top: 5%;
`

const RightUpperArm = styled.div`
    width: 25%;
    height: 70%;
    position: absolute;
    // background-color: white;
    right: -15%;
    top: 30%;
`
// transform: rotate(120deg);

const wave = keyframes`
    0%, 100% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(20deg);
    }
`

const LeftForeArm = styled.div`
    position: absolute;
    width: 25%;
    height: 70%;
    left: -35%;
    top: -32%;
    z-index: 5;
    transform: rotate(10deg);
    animation: ${wave} infinite ease-in-out;
    animation-duration: 6s;
`

const RightForeArm = styled.div`
    position: absolute;
    width: 25%;
    height: 70%;
    right: 2%;
    top: 52%;
    z-index: 5;
    transform: rotate(-90deg);
`

const ForeArm = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    background-color: #902001;
    bottom: 0;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
`

const Shoulder = styled.div`
    width: 100%;
    height: 35%;
    position: absolute;
    top: 0;
    border-radius: 50%;
    background-color: #902001;
`

const Arm = styled.div`
    width: 100%;
    height: 75%;
    position: absolute;
    top: 10%;
    background-color: #902001;
`

const Cover = styled.div`
    width: 25%;
    height: 35%;
    position: absolute;
    top: 30%;
    z-index: 100;
    border-top-left-radius: 50%;
    background-color: #901001;
`

const JointUpper = styled.div`
    width: 100%;
    height: 35%;
    position: absolute;
    top: 70%;
    background-color: #902001;
    border-radius: 50%;
`

const JointFore = styled.div`
    width: 100%;
    height: 36%;
    position: absolute;
    top: 65%;
    background-color: #902001;
    border-radius: 70%;
`

const Hand = styled.div`
    width: 100%;
    height: 65%;
    position: absolute;
    top: -10%;
    background-color: navy;
    border-radius: 50%;
`
const Pants = styled.div`
    width: 35%;
    height: 10%;
    margin: auto;
    position: relative;
    background-color: navy;
    border-top: 3px solid black;
`

const ClothingSplit = styled.div`
    position: absolute;
    width: 2%;
    height: 100%;
    background-color: white;
    left: 50%;
    border-top-right-radius: 50%;
`

const ClothingButton = styled.div<{ top: string }>`
    position: absolute;
    width: 5%;
    height: 5%;
    background-color: white;
    left: 35%;
    top: ${({ top }) => top && top};
    border-radius: 50%;
`

const PantsPocketLeft = styled.div`
    position: absolute;
    width: 20%;
    height: 50%;
    top: 10%;
    left: 3%;
    background-color: blue;
    border-bottom-right-radius: 50%;
`

const PantsPocketRight = styled.div`
    position: absolute;
    width: 20%;
    height: 50%;
    top: 10%;
    right: 3%;
    background-color: blue;
    border-bottom-left-radius: 50%;
`

const Worker = () => {
    return (
        <WorkerContainer>
            <Head>
                <HatRidge />
                <SafetyGoggles>
                    <LeftLens />
                    <RightLens />
                    <LeftWing />
                    <RightWing />
                </SafetyGoggles>
            </Head>
            <Torso>
                <Cover />
                <LeftUpperArm>
                    <JointUpper />
                    <Arm />
                    <Shoulder />
                </LeftUpperArm>
                <LeftForeArm>
                    <Hand />
                    <JointFore />
                    <ForeArm />
                </LeftForeArm>
                <RightUpperArm>
                    <JointUpper />
                    <Arm />
                    <Shoulder />
                </RightUpperArm>
                <RightForeArm>
                    <Hand />
                    <JointFore />
                    <ForeArm />
                </RightForeArm>
                <ClothingSplit />
                <TorsoPocket />
                <ClothingButton top="30%" />
                <ClothingButton top="45%" />
                <ClothingButton top="60%" />
            </Torso>
            <Pants>
                <ClothingButton top="30%" />
                <ClothingSplit />
                <PantsPocketLeft />
                <PantsPocketRight />
            </Pants>
        </WorkerContainer>
    )
}

export default Worker
