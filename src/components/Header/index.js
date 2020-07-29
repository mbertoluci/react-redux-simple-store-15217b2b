import React from "react"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`bg-blue-300`}
`

export default function Header(props){
  return (
    <Container>
      Você possui x mensagens
    </Container>
  )
}