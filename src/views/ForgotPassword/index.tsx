
import { Box, Typography, Grid, TextField, Button } from '@mui/material'
import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import useResize from '../../hooks/useResize'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const { widthPage } = useResize()
  const xsSize = 600

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value)
  }

  const sendData = (event: { preventDefault: () => void }) => {
    event?.preventDefault()
    console.log(email)
    setEmail('')
  }

  return (
    <Grid container
      alignItems='center'
      justifyContent='center'
      height='100vh'
      overflow='hidden'>
      {
        widthPage >= xsSize && (
          <Grid item xs={0} sm={6} role='containerImage'>
            <img src='https://img.freepik.com/premium-photo/group-friends-eating-together_53876-9934.jpg'
              alt='teste'
              className='full-image'
            />
          </Grid>
        )
      }

      <Grid item py={6} px={3} xs={12} sm={6}>
        <Typography variant='h4' component='h1'>
          Esqueceu a senha?
        </Typography>

        <Typography my={4} variant='body1' component='p'>
          Digite seu e-mail para recuperar a senha.
        </Typography>

        <form onSubmit={sendData}>
          <Box pb={2}>
            <TextField
              id='email'
              label='E-mail'
              variant='outlined'
              value={email}
              onChange={handleEmail}
              fullWidth
            />
          </Box>

          <Box display='flex' justifyContent='space-between'>
            <Link role="login" to='/'>
              <Button>Voltar</Button>
            </Link>

            <Button type='submit' variant='contained'>
              Enviar
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}

export default ForgotPassword