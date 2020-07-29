import React from "react"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`bg-pink-300 flex-1`}
`
const MessageBox = styled.div`
  ${tw`bg-white rounded-sm w-48 m-2`}
`

export default function Body(props){
  return (
    <Container>
      <MessageBox>
        Primeira
      </MessageBox>
      <MessageBox>
        Segunda
      </MessageBox>
      <MessageBox>
        Terceira
      </MessageBox>
    </Container>
  )
}