import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Autocomplete } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'
import { Visibility, VisibilityOff } from "@mui/icons-material"

import MiniDrawer from "../../../components/MiniDrawer"
import { createUser } from "../../../store/reducers/users/handlers/createUser";
import { getAllEmployees } from "../../../store/reducers/employees/handlers/getAllEmployees";
import { updateUser } from "../../../store/reducers/users/handlers/updateUser";
import { getUserById } from "../../../store/reducers/users/handlers/getUserById";

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
  const dispatch = useDispatch<any>();
  const { id } = useParams();
  const isEdit = id !== undefined;

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  useEffect(() => {
    const getEmployees = async () => {
      const employees = await dispatch(getAllEmployees())
      setEmployees(employees?.payload)
    }

    const getUser = async () => {
      const user = await dispatch(getUserById(id));
      setFormData({ ...user.payload, confirmPassword: user.payload.password });
    }

    isEdit && getUser();

    getEmployees();

  }, [dispatch, id, isEdit])

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleChangeEmployee = (_e: any, value: any | null) => {
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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (invalidPassword()) return alert('Os campos de senhas estão divergentes');

    const request = {
      userName: formData.userName,
      password: formData.password,
      employee: formData.employee
    }

    if (isEdit) {
      await dispatch(updateUser({ ...request, id: id }));
      return alert('Registro alterado com sucesso!');
    }

    await dispatch(createUser(request));
    setFormData(emptyFormData);
    alert('Registro criado com sucesso!');
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
              <Autocomplete
                disablePortal
                fullWidth
                id='employee'
                options={employees}
                value={formData.employee}
                isOptionEqualToValue={(option: any, value: any) => option.employee === value.employee}
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
              startIcon={isEdit ? <EditIcon /> : <SaveIcon />}
              variant='contained'
              color='success'
              type="submit">
              {isEdit ? 'Editar' : 'Salvar'}
            </Button>
          </Box>

        </form>
      </Box>
    </MiniDrawer>
  )
}

export default CreateUser