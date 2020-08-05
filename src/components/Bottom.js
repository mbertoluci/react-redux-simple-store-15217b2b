import React, {useState} from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import tw from "twin.macro"

import {
  ADD_MESSAGE
} from "../constants/actionTypes"


const Container = styled.div`
  ${tw`p-5`}
`

const Input = styled.input`
  ${tw`py-2 px-4 rounded ml-10`}
`

const SendButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10`}
`

const mapStateToProps = state => ({ ...state.message })

const mapDispatchToProps = dispatch => ({
   addMessage: message =>
     dispatch({ type: ADD_MESSAGE, key: Math.random(), value: message })
})

function Bottom(props){

  const [inputTextMessage, setInputTextMessage] = useState("")
  
  const changeMessage = ev => {
    setInputTextMessage(ev.target.value)
  }

  const submitForm = () => ev => {
    ev.preventDefault()
    props.addMessage(inputTextMessage)
    setInputTextMessage("")
  }

  return (
    <Container className="bg-custom-100">
      <form onSubmit={submitForm()}>
        <Input type="text" 
               placeholder="Insert your message here!"               
               value={inputTextMessage}
               onChange={changeMessage} />
        <SendButton>Send</SendButton>
      </form>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom)
