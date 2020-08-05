import React from "react"
import { connect } from "react-redux"
import { FiTrash2 } from "react-icons/fi"

import styled from "styled-components"
import tw from "twin.macro"

import {
  DELETE_MESSAGE
} from "../constants/actionTypes"

export const Container = styled.div`
  ${tw`rounded-lg w-48 m-2 p-4`}
`

const mapDispatchToProps = dispatch => ({
  removeMessage: key =>
    dispatch({ type: DELETE_MESSAGE, key })
})

function MessageBox({id, message, ...props}){
  
  const onClickRemoveMessage = (key) => {
    props.removeMessage(key)
  }

  return (
    <Container {...props} className="bg-custom-300">
      <div>
        <button onClick={() => onClickRemoveMessage(id)}>
          <FiTrash2 size={18} color={"#ff0000"}/>
        </button>
      </div>  
      <div>
        {message}
      </div> 
    </Container>
  );

}

export default connect(null, mapDispatchToProps)(MessageBox)