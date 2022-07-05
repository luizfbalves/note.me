import { Container, Banner, FormLogin } from './styles'
import { Button, Input, Divider } from 'rsuite'
import BannerSVG from '../../assets/images/banner.svg'

export default function Login() {
  return (
    <Container>
      <Banner>
        <img src={BannerSVG} alt="" />
      </Banner>
      <FormLogin>
        <FormLogin.Group id="title">
          <h2>NOTE.</h2>
          <h4>me</h4>
          <br />
        </FormLogin.Group>
        <FormLogin.Group>
          <Button block color="blue" appearance="primary">
            Join with Google
          </Button>
          <Divider>or</Divider>
        </FormLogin.Group>
        <FormLogin.Group>
          <FormLogin.ControlLabel>Email</FormLogin.ControlLabel>
          <Input title="email" type="email" />
        </FormLogin.Group>
        <FormLogin.Group>
          <FormLogin.ControlLabel>Password</FormLogin.ControlLabel>
          <Input title="password" type="password" />
        </FormLogin.Group>
        <Button block color="green" appearance="primary">
          Login
        </Button>
      </FormLogin>
    </Container>
  )
}
