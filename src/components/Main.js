import React from "react"

import Header from "./Header"
import Body from "./Body"
import Bottom from "./Bottom"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`flex flex-col w-full h-screen`}
`

export default function Main(){
  return (
    <Container>
      <Header />
      <Body />
      <Bottom />
    </Container>
  )
}