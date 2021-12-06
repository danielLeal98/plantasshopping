import ReactLoading from 'react-loading'
import styled from 'styled-components'
import colors from '../constants/colors'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 70px;
  justify-content: center;
  height: 70vh;
`

const Loading = () => <Container>
  <ReactLoading type={'spin'} color={colors.green} height={36} width={36} delay={5} />
</Container>

export default Loading