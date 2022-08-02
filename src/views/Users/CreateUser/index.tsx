import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Autocomplete } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import { Visibility, VisibilityOff } from "@mui/icons-material"

import MiniDrawer from "../../../components/MiniDrawer"
import { createUser } from "../../../store/reducers/users/handlers/createUser";
import { getAllEmployees } from "../../../store/reducers/employees/handlers/getAllEmployees";

const emptyFormData = {
  employee: {
    id: '',
    name: ''
  },
  userName: '',
  password: '',
  confirmPassword: '',
}

const CreateUser = () => {
  const [formData, setFormData] = useState(emptyFormData)
  const [employees, setEmployees] = useState<any>([])
  const dispatch = useDispatch<any>()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleChangeEmployee = (_e: any, value: { id: string; name: string; }) => {
    setFormData({
      ...formData,
      employee: {
        id: value?.id,
        name: value?.name
      }
    })
  }

  const invalidPassword = () => {
    return formData.password !== formData.confirmPassword
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (invalidPassword()) return alert('Os campos de senhas estão divergentes')

    dispatch(createUser({
      userName: formData.userName,
      password: formData.password,
      employee: formData.employee
    }))

    setFormData(emptyFormData)
  }

  useEffect(() => {
    const getEmployees = async () => {
      const response = await dispatch(getAllEmployees())
      setEmployees(response?.payload)
      return response;
    }
    getEmployees()
  }, [dispatch])

  return (
    <MiniDrawer title="Cadastrar Usuário">
      <Typography variant='h4' component='h1' >
        Cadastrar Usuário
      </Typography>

      <Box my={3}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} item>
              <Autocomplete
                disablePortal
                fullWidth
                id='employee'
                options={employees}
                getOptionLabel={(option: any) => option.name}
                onChange={(e, value) => handleChangeEmployee(e, value)}
                renderInput={(params) => <TextField {...params} label="Funcionário" />}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='userName'
                name='userName'
                label='Usuário'
                variant='outlined'
                value={formData.userName}
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