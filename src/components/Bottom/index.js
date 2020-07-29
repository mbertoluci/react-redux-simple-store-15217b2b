import React from "react"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`bg-green-300`}
`

const Input = styled.input`
  ${tw`
    py-2 
    px-4 
    rounded
    ml-10
  `}
`

const SendButton = styled.button`
  ${tw`
    bg-blue-500 
    hover:bg-blue-700 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
    ml-10
  `}
`

export default function Bottom(props){
  return (
    <Container>
      <Input type="text" />
      <SendButton>Enviar</SendButton>
    </Container>
  )
}