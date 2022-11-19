
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 
 height : 30px;
 background-color : teal;
 color :white;
 display : flex;
 justify-content : center;
 align-items : center;
 font-size :14px;
 font-weight : 500;

`

const Announcement = () => {
  return (
    <Container>
      Great Deal ! Dilwali Special Offer get free shiping oreder over $50
    </Container>
  )
}

export default Announcement