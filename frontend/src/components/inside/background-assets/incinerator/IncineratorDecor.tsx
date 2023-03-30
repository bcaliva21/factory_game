import React, { useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useQuery } from '@apollo/client'

// cache
import { GET_HIGH_SCORES_AND_NAMES } from '../../../../cache/queries'

// components
import { TinyItem, generateRandomColor } from '../../utils'

const firewave = keyframes`
	0%, 100% {
		border-left: 11px solid maroon;
		border-top: 15px solid maroon;
	}
	50% {
		border-left: 15px solid maroon;
		border-top: 11px solid maroon;
	}
`

const innerFirewave = keyframes`
	0%, 100% {
		border-top-left-radius: 0;
	    border-top-right-radius: 11px;
	    border-bottom-right-radius: 15px;
	    border-bottom-left-radius: 15px;
	}
	50% {
		border-top-left-radius: 0;
	    border-top-right-radius: 15px;
	    border-bottom-right-radius: 11px;
	    border-bottom-left-radius: 11px;
	{
`


const DecorContainer = styled.div`
    width: 100%;
    height: 45%;
    background-color: transparent;
    position: absolute;
    bottom: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        cursor: pointer;
    }
    z-index: 150;
`

const FireContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
`

const FireWindow = styled.div`
    background-color: orange;
    width: 45%;
    height: 80%;
    position: relative;
    display: flex;
    align-items: end;
    justify-content: center;
    border: 2px solid #282828;
    z-index: 100;
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.25),
    -6px -6px 8px 0 rgba(145, 20, 0, 1);
`

const FireWindowGlass = styled.div`
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 124;
    background-color: skyblue;
    opacity: 0.4;
`

const Fire = styled.div<{ size: string }>`
    transform: rotate(45deg);
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-top-left-radius: 0;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-left: 11px solid red;
    border-top: 15px solid red;
    overflow: hidden;
    background-color: orange;
    margin-bottom: 2px;

    animation: ${firewave} infinite linear;
    animation-duration: 5s;
    &:after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 15px;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 11px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        background-color: white;
        animation: ${innerFirewave} infinite linear;
        animation-duration: 4s;
    }
`
const HighScoreContainer = styled.div`
    width: 40%;
    height: 30%;
    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.25),
        -6px -6px 8px 0 rgba(145, 20, 0, 1);
    background: linear-gradient(
        -45deg,
        rgba(0, 0, 0, 0.22),
        rgba(100, 100, 100, 0.25)
    );
    border: 1px outset #901000;
    border-radius: 5%;
    z-index: 50;
`

const NamePlate = styled.div`
    width: 100%;
    height: 30%;
    font-size: 14px;
    color: #420700;
    text-transform: uppercase;
    text-align: center;
    text-justify: center;
`

const ScorePlate = styled.div`
    width: 100%;
    height: 50%;
    font-size: 14px;
    color: #420700;
    text-transform: uppercase;
    text-align: center;
    text-justify: center;
`

const ItemRowIncinerator = styled.div`
    width: 100%;
    height: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ItemsContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column-reverse;
    margin-left: 1px;
`

const HighScoreTable = styled.table`
    width: 85%;
    height: 100%;
`
const HighScoreHead = styled.thead`
    background-color: navy;
    color: #fff;
`
const HighScoreHeaderRow = styled.tr``
const HighScoreTableHeader = styled.th`
    border: 1px outset navy;
`
const HighScoreBody = styled.tbody``
const HighScoreBodyRow = styled.tr``
const HighScoreCell = styled.td<{ color: string; }>`
    border: 1px outset ${({ color }) => color };
    background-color: ${({ color }) => color };
    color: black;
`
const HighScoreCellRank = styled.td<{ color: string; }>`
    border: 1px outset ${({ color }) => color };
    background-color: ${({ color }) => color };
    width: 20%;
    color: black;
    text-align: start;
`

const IncineratorDecor = () => {
    const { data, loading, error } = useQuery(GET_HIGH_SCORES_AND_NAMES, {
        pollInterval: 500,
    })
    const [showTopScorersTable, setShowTopScorersTable] = useState(false)
    
    const users = loading ? [] : data.users
    const topScorers = users.slice(0,4).map((user: any) => {
        return {
            name: user.name,
            score: user.highScore,
        }
    })

    const populateRow = () => {
        const row = []
        for (let i = 0; i < 16; i++) {
            row.push(i)
        }
        return (
            <ItemRowIncinerator key={Math.floor(Math.random() * 100000) + 'a'}>
                {row.map((item, index) => (
                    <TinyItem key={Math.floor(Math.random() * 100000) + 'b'} color={generateRandomColor()} />
                ))}
            </ItemRowIncinerator>
        )
    }

    const rows = useMemo(() => {
        const repeat = (times: number) => {
            const rows = []
            for (let i = 0; i < times; i += 1) {
                rows.push(populateRow())
            }
            return rows
        }

        return (
            <>
                <ItemsContainer>{repeat(5)}</ItemsContainer>
            </>
        )
    }, [])

    const handleHighScoreClick = () => setShowTopScorersTable(!showTopScorersTable)

    const getName = (user: { name: string; score: number; }) => user?.name
    const getScore = (user: { name: string; score: number; }) => user?.score

    return (
        <DecorContainer onClick={handleHighScoreClick}>
            {showTopScorersTable
                ? 
                <HighScoreTable>
                    <HighScoreHead>
                        <HighScoreHeaderRow>
                            <HighScoreTableHeader colSpan={3}>
                                High Scores
                            </HighScoreTableHeader>
                        </HighScoreHeaderRow>
                    </HighScoreHead>
                    <HighScoreBody>
                        <HighScoreBodyRow>
                            <HighScoreCellRank color={'#fdfdfd'}>Rank</HighScoreCellRank>
                            <HighScoreCell color={'#fdfdfd'}>Username</HighScoreCell>
                            <HighScoreCell color={'#fdfdfd'}>Score</HighScoreCell>
                        </HighScoreBodyRow>
                        <HighScoreBodyRow>
                            <HighScoreCellRank color={'gold'}>1</HighScoreCellRank>
                            <HighScoreCell color={'gold'}>{getName(topScorers[0])}</HighScoreCell>
                            <HighScoreCell color={'gold'}>{getScore(topScorers[0])}</HighScoreCell>
                        </HighScoreBodyRow>
                        <HighScoreBodyRow>
                            <HighScoreCellRank color={'silver'}>2</HighScoreCellRank>
                            <HighScoreCell color={'silver'}>{getName(topScorers[1])}</HighScoreCell>
                            <HighScoreCell color={'silver'}>{getScore(topScorers[1])}</HighScoreCell>
                        </HighScoreBodyRow>
                        <HighScoreBodyRow>
                            <HighScoreCellRank color={'#cd7f32'}>3</HighScoreCellRank>
                            <HighScoreCell color={'#cd7f32'}>{getName(topScorers[2])}</HighScoreCell>
                            <HighScoreCell color={'#cd7f32'}>{getScore(topScorers[2])}</HighScoreCell>
                        </HighScoreBodyRow>
                    </HighScoreBody>
                </HighScoreTable>
                :
                <>
                <FireContainer>
                <FireWindow>
                    <FireWindowGlass />
                    {rows}
                    <Fire size={'25px'} />
                    <Fire size={'27px'} />
                    <Fire size={'25px'} />
                </FireWindow>
            </FireContainer>
            <HighScoreContainer>
                <NamePlate>{loading ? '' : getName(topScorers[0])}</NamePlate>
                <ScorePlate>{loading ? '' : getScore(topScorers[0])}</ScorePlate>
            </HighScoreContainer>
            </>
            }
        </DecorContainer>
    )
}

export default IncineratorDecor
