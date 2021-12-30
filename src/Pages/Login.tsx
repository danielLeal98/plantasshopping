import styled from 'styled-components'
import colors from '../constants/colors'
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 75px;
  padding-right: 25px;
  align-items: center;
`

const LoginButton = styled.button`
  min-width: 75px;
  padding: 10px;
  outline: none;
  border: none;
  border: none;
  border: 2px solid ${colors.green};
  border-color: ${colors.green};
  color: ${colors.green};
  background-color: ${'white'};
  cursor: pointer;
  text-transform: uppercase;

`
const SignUpButton = styled.button`
  cursor: pointer;

  min-width: 75px;
  padding: 10px;
  outline: none;
  border: none;
  background-color: ${colors.green};
  color: white;
  text-transform: uppercase;
`

const InputRandom = styled.input`
`

function Login({ ...rest }) {

  const [tel, setTel] = useState('');
  const [smsCode, setSSmsCode] = useState('');
  const [showCodeInput, setCodeInput] = useState(false)
  const [confirmResult, setConfirmResult]: any = useState()
  const [userCredentials, setUserCredentials] = useState()


  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': () => { }
    }, auth);

    console.log(auth.currentUser)

  }, [])


  const handleLogin = async () => {
    const appVerifier = window.recaptchaVerifier; //RECAPTCHA

    try {
      await signInWithPhoneNumber(auth, tel, appVerifier).then((res) => {
        setConfirmResult(res);
      });
      setCodeInput(true)
    } catch (error) {
      console.log(error)
      setCodeInput(false);
    }
  }

  const handleSubmitCode = async () => {
    try {
      await confirmResult.confirm(smsCode).then((_userCredentials: any) => {
        setUserCredentials(_userCredentials)
        console.log(userCredentials)
      });

    } catch (error) {
      console.log(error)
    }
  }


  return <Container {...rest} >
    <LoginButton
      onClick={handleLogin}
      id='sign-in-button'
    >
      ENTRAR
    </LoginButton>
    <SignUpButton onClick={() => console.log(Date.now())} id='sign-up-button'>
      CADASTRAR
    </SignUpButton>
    <InputRandom
      type='tel'
      placeholder='+55 92 98888-9999'
      onChange={(e) => setTel(e.target.value)}
      value={tel}
    />




    <div style={{
      display: showCodeInput ? 'block' : 'none',
    }}>
      <InputRandom
        type='text'
        placeholder='Digite o código de verificação'
        onChange={(e) => setSSmsCode(e.target.value)}
        value={smsCode}
      />
      <button onClick={handleSubmitCode}>Enviar</button>
    </div>
  </Container>
}

export default Login;