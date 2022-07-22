import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Grid, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material'
import { useState } from 'react'
import useResize from '../../hooks/useResize'

import { Link } from 'react-router-dom'

import './styles.css'

const emptyFormData = {
  user: '',
  password: ''
}

const Login = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const { widthPage } = useResize()
  const xsSize = 600

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const clearForm = () => {
    setFormData(emptyFormData)
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(formData)
    clearForm()
  }

  return (
    <Grid
      container
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
          Login
        </Typography>

        <Typography my={4} variant='body1' component='p'>
          Sistema para restaurantes
        </Typography>

        <form onSubmit={handleSubmit}>

          <Box mb={3}>
            <TextField
              id='user'
              label='Usuário'
              variant='outlined'
              type='text'
              name='user'
              value={formData.user}
              onChange={({ target: value }) => handleChange(value)}
              fullWidth
            />
          </Box>

          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='outlined-adornment-password'>Senha</InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={isShowPassword ? 'text' : 'password'}
              value={formData.password}
              name='password'
              onChange={({ target: value }) => handleChange(value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    role='iconPassword'
                    aria-label='toggle password visibility'
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    edge='end'
                  >
                    {isShowPassword ? <VisibilityOff data-testid='visibilityOff' /> : <Visibility data-testid='visibility' />}
                  </IconButton>
                </InputAdornment>
              }
              label='Senha'
            />
          </FormControl>

          <Box pt={3} display='flex' justifyContent='space-between'>
            <Link role='forgot-password' to='/esqueci-a-senha'>
              <Button>Cadastre-se</Button>
            </Link>

            <Link role='schedules' to='/agendamentos'>
              <Button variant='contained'>Entrar</Button>
            </Link>
          </Box>

        </form>

      </Grid>
    </Grid>
  )

}

export default Login