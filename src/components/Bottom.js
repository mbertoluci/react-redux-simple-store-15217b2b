import React from "react"

import { connect } from 'react-redux';

import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_FIELD_MESSAGE,
  CLEAR_FIELD_MESSAGE
} from '../constants/actionTypes';

import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`bg-green-300`}
`

const Input = styled.input`
  ${tw`py-2 px-4 rounded ml-10`}
`

const SendButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10`}
`

const mapStateToProps = state => ({ ...state.message });

const mapDispatchToProps = dispatch => ({
  addMessage: message =>
    dispatch({ type: ADD_MESSAGE, key: Math.random(), value: message }),
  removeMessage: key =>
    dispatch({ type: DELETE_MESSAGE, key }),
  onChangeMessage: value =>
    dispatch({ type: UPDATE_FIELD_MESSAGE, key:'message', value }),
  onClearInputMessage:  () =>
    dispatch({ type: CLEAR_FIELD_MESSAGE, key:'message' })
});


function Bottom(props){
  
  const changeMessage = ev => props.onChangeMessage(ev.target.value);  
  const message = props.message;

  const submitForm = (message) => ev => {
    ev.preventDefault();
    props.addMessage(message);
    props.onClearInputMessage();
  };

  return (
    <Container>
      <form onSubmit={submitForm(message)}>
        <Input type="text" 
               placeholder="message"
               value={message}
               onChange={changeMessage} />
        <SendButton>Enviar</SendButton>
      </form>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);