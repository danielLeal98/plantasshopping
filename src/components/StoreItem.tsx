import { IoCart } from 'react-icons/io5'
import styled from 'styled-components'
import colors from '../constants/colors'
// import ScrollReveal from 'scrollreveal'

const img = 'https://cdn.leroymerlin.com.br/products/suculenta_pote_09_89209813_0001_600x600.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  max-width: 300px;
  align-self: center;
  justify-self: center;
`

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  cursor: pointer;
`

const Title = styled.h1`
  padding-block: 10px;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.heading};
  align-self: flex-start;
  justify-self: flex-start;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`
const Price = styled.p`
  font-size: 14px;
  color: ${colors.subtitle};
  font-weight: 400;
  align-self: flex-start;
  justify-self: flex-start;
  `
const BuyButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: ${colors.green};
  color: white;
  width: 44px;
  height: 44px;  
  cursor: pointer;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`
const LeftContainer = styled.div`
  align-self: flex-start;
  justify-self: flex-start;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`

function StoreItem() {
  // ScrollReveal().reveal('.storeItem', { delay: 100 });
  return (
    <Container className="storeItem">
      <Thumbnail src={img} />
      <InfoContainer>
        <LeftContainer>
          <Title>Suculenta</Title>
          <Price>R${'15,00'}</Price>
        </LeftContainer>
        <BuyButton onClick={() => alert('comprou')}><IoCart fontSize={24} /></BuyButton>
      </InfoContainer>
    </Container>
  )
}

export default StoreItem