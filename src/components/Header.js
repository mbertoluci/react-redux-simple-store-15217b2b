import React from "react"
import { connect } from 'react-redux';

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`bg-blue-300`}
`

const mapStateToProps = state => ({ ...state.message });


function Header(props){
  return (
    <Container>
      Você possui {props.count} mensagens
    </Container>
  )
}

export default connect(mapStateToProps, null)(Header);