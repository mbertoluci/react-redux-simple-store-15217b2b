import React from "react"
import { connect } from 'react-redux'
import styled from "styled-components"
import tw from "twin.macro"

import MessageBox from "./MessageBox"

const Container = styled.div`
  ${tw`flex-1 overflow-y-hidden overflow-y-scroll`}
`

const mapStateToProps = state => ({ ...state.message })

function Body(props){
  
  return (
    <Container className="bg-custom-200">
    {props.messages.map(message => {
        return (
          <MessageBox key={message.key} id={message.key} message={message.value}/>
        )
      })}  
    </Container>
  )
}

export default connect(mapStateToProps, null)(Body)
