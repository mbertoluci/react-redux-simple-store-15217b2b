import React from "react"

import Header from "../../components/Header"
import Body from "../../components/Body"
import Bottom from "../../components/Bottom"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-screen
  `}
`

export default function StepOne(){
  return (
    <Container>
      <Header />
      <Body />
      <Bottom />
    </Container>
  )
}