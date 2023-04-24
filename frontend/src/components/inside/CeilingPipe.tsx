import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { GET_ITEMS } from '../../graphql/queries'
// components
import Item from './Item'

const PipeContainer = styled.div`
    position: absolute;
    height: calc(80vh / 2);
    width: calc(100vw / 8);
    right: calc(100vw / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    z-index: 10;
`

const VerticalPipingContainer = styled.div`
    position: absolute;
    top: calc(calc(-80vh / 2) / 6);
    right: 0%;
    width: 30%;
    height: 10%;
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: start;
`

const PipeSectionExtention = styled.div`
    position: relative;
    background-color: slategrey;
    margin-bottom: 10px;
    height: calc(calc(80vh / 2) / 6);
    width: calc(100vw / 16);
    border: solid black 1px;
    border-top-left-radius: 20%;
    border-right: solid silver 10px;
`

const PipeSectionExtentionReversed = styled.div`
    position: relative;
    background-color: slategrey;
    height: calc(calc(80vh / 2) / 6);
    width: calc(100vw / 16);
    border: solid black 1px;
    border-top-right-radius: 20%;
    border-bottom-right-radius: 20%;
    margin-bottom: 10px;
`

const PipeVerticalSection = styled.div`
    background-color: slategrey;
    margin-bottom: 10px;
    height: calc(calc(80vh / 2) / 6);
    width: calc(100vw / 16);
    z-index: 6;
    border: solid black 1px;
    border-right: solid silver 10px;
`

const PipeSection = styled.div`
    position: relative;
    background-color: slategrey;
    height: calc(calc(80vh / 2) / 6);
    width: calc(100vw / 16);
    z-index: 6;
    border: solid black 1px;
    border-top: solid silver 10px;
`

const FunnelSection = styled.div`
    position: absolute;
    background-color: slategrey;
    height: calc(100vw / 20);
    width: calc(100vw / 20);
    bottom: 30%;
    transform: rotate(45deg);
    z-index: 6;
    border: solid black 1px;
`

const Cover = styled.div`
    position: absolute;
    background-color: silver;
    width: calc(100vw / 11);
    height: calc(100vh / 12);
    bottom: 20%;
    z-index: 8;
    border-top: solid silver 15px;
`
const CoverHole = styled.div`
    position: relative;
    background-color: black;
    width: calc(100vw / 16);
    height: calc(100vh / 16);
    margin: auto;
`

const PipeWindow = styled.div`
    position: relative;
    width: calc(100vh / 24);
    height: calc(calc(80vh / 2) / 9);
    border-radius: 6%;
    border: solid black 1px;
    background-color: lightblue;
    margin: auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CeilingPipe = () => {
    const { data, error, loading } = useQuery(GET_ITEMS)

    if (error) console.log('oops, there is an error')
    if (loading) console.log('sorry, still loading')

    const items = data.items
    return (
        <>
            <VerticalPipingContainer>
                <PipeSectionExtention />
                <PipeVerticalSection />
                <PipeVerticalSection />
                <PipeSectionExtentionReversed />
            </VerticalPipingContainer>
            <PipeContainer>
                {items.length > 0 ? (
                    <>
                        <PipeSection>
                            <PipeWindow>
                                <Item
                                    color={items[0].color}
                                    animation={items[0].animation}
                                    id={'none'}
                                />
                            </PipeWindow>
                        </PipeSection>
                        <PipeSection>
                            <PipeWindow>
                                <Item
                                    color={items[1].color}
                                    animation={items[1].animation}
                                    id={'none'}
                                />
                            </PipeWindow>
                        </PipeSection>
                    </>
                ) : (
                    <>
                        <PipeSection>
                            <PipeWindow></PipeWindow>
                        </PipeSection>
                        <PipeSection>
                            <PipeWindow></PipeWindow>
                        </PipeSection>
                    </>
                )}
                <PipeSection />
                <FunnelSection />
                <Cover>
                    <CoverHole />
                </Cover>
            </PipeContainer>
        </>
    )
}

export default CeilingPipe
