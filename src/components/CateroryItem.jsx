import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

 flex : 1;
 margin: 3px;
 height : 70vh;
 position : relative;
`;

const Image = styled.img`
 width :100%;
 height: 100%;
 object-fit: cover;
 
`
const Info = styled.div`
  position : absolute;
  width :100%;
  height :100%;
  top : 0;
  left : 0;
 
  ${'' /* margin : auto; */}
  display :flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  ${'' /* background-color : yellow; */}
`
const Title = styled.h1`
  color : white;
  margin : 20px;
`
const Button =styled.button`
  border : none;
  padding : 10px;
  font-size :14px;
  background-color : white;
  color : gray;
  cursor : pointer;
  font-weight : 600;
`

const CateroryItem = ({item}) => {
  return (
     <Container>
       <Image src={item.img}/>
       <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
       </Info>
     </Container>
  )
}

export default CateroryItem