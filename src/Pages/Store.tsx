import { useMatch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import StoreItem from '../components/StoreItem'
import Loading from '../components/Loading'


const Container = styled.div`
  padding-top: 0px;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
  gap: 10px;
  background-color: ${'white'};
  max-width: 98%;
  /* align-self: center; */
  padding-inline: 50px;
  padding-block: 50px; 
  padding-top: 90px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 3fr);
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 2fr);
    gap: 7px;
    padding-inline: 10px;
  }

`

function Store() {
  const [loaded, setLoaded] = useState(false)
  const navActived = useMatch('*')

  useEffect(() => {
    window.scrollTo(0, 0)
    setInterval(() => setLoaded(true), 1000)
  }, [navActived])


  return (
    <>
      {
        !loaded ?
          <Loading /> :
          <Container>
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
            <StoreItem />
          </Container>
      }
    </>
  )

}

export default Store