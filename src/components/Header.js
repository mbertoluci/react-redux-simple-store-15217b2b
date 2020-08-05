import React from "react"
import { connect } from "react-redux"

import styled from "styled-components"
import tw from "twin.macro"

const Container = styled.div`
  ${tw`p-5`}
`

const mapStateToProps = state => ({ ...state.message });

function Header(props){
  return (
    <Container className="bg-custom-100">
      Inbox ({props.count})
    </Container>
  )
}

export default connect(mapStateToProps, null)(Header)