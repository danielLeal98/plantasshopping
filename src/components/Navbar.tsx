import styled from 'styled-components'
import colors from '../constants/colors'
import { IoClose, IoReorderThree, IoLogoWhatsapp, IoLogoInstagram } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { useMatch } from 'react-router-dom'

const Container = styled.div`
  z-index: 13;
  position: fixed;

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 70px;
  list-style-type: none;
  background-color: white;
  box-shadow: 0 -1px #e7e7e7 inset;
  @media only screen and (max-width: 768px) {
    #cactos, #plantas, #diversos, #sobre, #whatsappNavBar {
      display: none;
    }
    #navbar {
      display: block;
    }
    height: 55px;
    justify-content: space-evenly;
    padding-left: 0;
  }
`

const Logo = styled.h1`
  font-size: 18px;
  padding-inline: 50px;
  color: black;

  @media only screen and (max-width: 768px) {
    align-self: center;
    justify-self: center;
  }
`

const NavBarItems = styled.div``


const SocialItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
`

const ButtonNavBar = styled.button`
  background-color: transparent;
  border: none;
  font-size: 36px;
  align-self: center;
  display: none;
  align-items: center;
  justify-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
  color: ${colors.subtitle};
`

const LeftBarItem = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding-block: 15px;
  text-decoration: none;
  border-bottom: 1px solid #e7e7e7;
  max-width: 90%;
`

const SocialNavbar = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 30px;
  color: ${colors.subtitle};
  text-decoration: none;
  align-self: flex-end;
  justify-self: flex-end;

  @media only screen and (max-width: 480px){
    
  }
`

const SocialContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin-block: 10px;
`


function Navbar() {

  const [navbarStatus, setNavbarStatus] = useState(false)
  const url = useMatch('*')

  const LeftNavbarContainer = styled.div`
    z-index: 10;
    display: ${navbarStatus ? 'flex' : 'none'};
    background-color: ${colors.green};
    height: 100vh;
    overflow-y: hidden;
    overflow: hidden;
    transition: 1s;
    color: white;

    flex-direction: column;
    padding-top: 80px;
    padding-left: 25px;
    justify-items: center;
  `

  const NavBarItem = styled.a`
  font-weight: 400;
  padding-inline: 15px;
  text-decoration: none;
  padding-left: 13;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  `

  useEffect(() => {
    const body = document.getElementsByTagName('body')
    window.scrollTo(0, 0)
    body[0].setAttribute("style", `overflow-y: ${navbarStatus ? 'hidden' : 'initial'}`)
  }, [navbarStatus])

  useEffect(() => {
    const body = document.getElementsByTagName('body')
    setNavbarStatus(false)
    body[0].setAttribute("style", `overflow-y: initial`)
  }, [url?.pathname])

  return (
    <>
      <Container>
        <ButtonNavBar
          onClick={() => setNavbarStatus(!navbarStatus)}>
          {
            navbarStatus ? <IoClose />
              : <IoReorderThree />
          }
          <Logo style={{ display: 'flex' }}>LOGO HERE</Logo>
        </ButtonNavBar>
        <NavBarItems>
          <NavBarItem color="red" href='/cactos'>CACTOS</NavBarItem>
          <NavBarItem color={'#0e0e0e'} href='/plantas'>PLANTAS</NavBarItem>
          <NavBarItem color={'#c8ff00'} href='/vasos'>VASOS</NavBarItem>
          <NavBarItem href='/diversos'>DIVERSOS</NavBarItem>
          <NavBarItem href='/nuevos'>DIVERSOS</NavBarItem>
        </NavBarItems>
        <NavBarItem href='/sobre'>SOBRE NÓS</NavBarItem>
        <SocialItems>
          <SocialNavbar href='https://instagram.com' target='_blank' id='instagramNavBar'>
            <IoLogoInstagram />
          </SocialNavbar>
          <SocialNavbar href='https://wa.link/fek4c9' target='_blank' id='whatsappNavBar'>
            <IoLogoWhatsapp />
          </SocialNavbar>
        </SocialItems>
      </Container>
      <LeftNavbarContainer>
        <LeftBarItem href='/cactos'>
          CACTOS
        </LeftBarItem>
        <LeftBarItem href='/plantas'>
          PLANTAS
        </LeftBarItem>
        <LeftBarItem href='/vasos'>
          VASOS
        </LeftBarItem>
        <LeftBarItem href='/diversos'>
          DIVERSOS
        </LeftBarItem>
        <LeftBarItem href='/sobre' >
          SOBRE NÓS
        </LeftBarItem>
        <SocialContainer href='https://instagram.com' target='_blank'>
          <IoLogoInstagram size={36} style={{ marginRight: 5 }} />
          Acompanhe as novidades.
        </SocialContainer>
        <SocialContainer href='https://wa.link/fek4c9' target='_blank'>
          <IoLogoWhatsapp size={36} style={{ marginRight: 5 }} />
          Compre pelo Whatsapp!
        </SocialContainer>
      </LeftNavbarContainer>
    </>
  )
}

export default Navbar