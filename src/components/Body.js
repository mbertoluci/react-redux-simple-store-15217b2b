import React from "react"

import { connect } from 'react-redux';

import {
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../constants/actionTypes';

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`bg-pink-300 flex-1`}
`
const MessageBox = styled.div`
  ${tw`bg-white rounded-sm w-48 m-2`}
`

const mapStateToProps = state => ({ ...state.message });

const mapDispatchToProps = dispatch => ({
  addMessage: message =>
    dispatch({ type: ADD_MESSAGE, key: Math.random(), value: message }),
  removeMessage: key =>
    dispatch({ type: DELETE_MESSAGE, key })
});


function Body(props){

  const onClickRemoveMessage = (key) => ev => {
    props.removeMessage(key);
  };

  return (
    <Container>
    {props.messages.map(message => {
        return (
          <MessageBox key={message.key}>
            <div>
              <button onClick={onClickRemoveMessage(message.key)}>x</button>
            </div>  
            <div>
              {message.value}
            </div> 
          </MessageBox>
        );
      })}  
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);