import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { v4 as uuid } from 'uuid'

import { Button, TextField, Typography, Box, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import { Visibility, VisibilityOff } from "@mui/icons-material"

import MiniDrawer from "../../../components/MiniDrawer"
import { addUser } from "../../../store/reducers/users";

const emptyFormData = {
  id: '',
  employee: '',
  user: '',
  password: '',
  confirmPassword: '',
}

const CreateUser = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const dispatch = useDispatch()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const invalidPassword = () => {
    return formData.password !== formData.confirmPassword
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (invalidPassword()) return alert('Os campos de senhas estão divergentes')

    dispatch(addUser({
      id: uuid(),
      employee: formData.employee,
      user: formData.user,
      password: formData.password,
    }))
    setFormData(emptyFormData)
  }

  return (
    <MiniDrawer title="Cadastrar Usuário">
      <Typography variant='h4' component='h1' >
        Cadastrar Usuário
      </Typography>

      <Box my={3}>
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <TextField
                id='employee'
                name='employee'
                label='Funcionário'
                variant='outlined'
                value={formData.employee}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='user'
                name='user'
                label='Usuário'
                variant='outlined'
                value={formData.user}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='password'>Senha</InputLabel>
                <OutlinedInput
                  id='password'
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
            </Grid>

            <Grid xs={12} sm={6} item>
              <FormControl variant='outlined' fullWidth>
                <InputLabel htmlFor='confirm-password'>Confirme a senha</InputLabel>
                <OutlinedInput
                  id='confirm-password'
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  name='confirmPassword'
                  onChange={({ target: value }) => handleChange(value)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        role='iconConfirmPassword'
                        aria-label='toggle password visibility'
                        onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                        edge='end'
                      >
                        {isShowConfirmPassword ? <VisibilityOff data-testid='visibilityOff' /> : <Visibility data-testid='visibility' />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Confirme a senha'
                />
              </FormControl>
            </Grid>
          </Grid>

          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            mt={3}>

            <Link to="/usuarios">
              <Button>
                Voltar
              </Button>
            </Link>

            <Button
              startIcon={<SaveIcon />}
              variant='contained'
              color='success'
              type="submit">
              Salvar
            </Button>
          </Box>

        </form>
      </Box>
    </MiniDrawer>
  )
}

export default CreateUser