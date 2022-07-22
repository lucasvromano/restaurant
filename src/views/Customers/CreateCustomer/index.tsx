import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { v4 as uuid } from 'uuid'

import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import MiniDrawer from "../../../components/MiniDrawer"

import { addCustomer } from "../../../store/reducers/customers";

const emptyFormData = {
  id: '',
  name: '',
  document: '',
  phone: '',
  email: '',
  birthday: '',
}

const CreateCustomer = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const dispatch = useDispatch()

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch(addCustomer({
      id: uuid(),
      name: formData.name,
      document: formData.document,
      phone: formData.phone,
      email: formData.email,
      birthday: formData.birthday,
    }))
    setFormData(emptyFormData)
  }

  return (
    <MiniDrawer title="Cadastrar Cliente">
      <Typography variant='h4' component='h1' >
        Cadastrar Cliente
      </Typography>

      <Box my={3}>
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>

            <Grid xs={12} sm={6} item>
              <TextField
                id='name'
                name='name'
                label='Nome'
                variant='outlined'
                value={formData.name}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='document'
                name='document'
                label='CPF'
                variant='outlined'
                value={formData.document}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='phone'
                name='phone'
                label='Telefone'
                variant='outlined'
                value={formData.phone}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='email'
                name='email'
                label='E-mail'
                variant='outlined'
                value={formData.email}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='birthday'
                name='birthday'
                label='Data Nasc.'
                variant='outlined'
                value={formData.birthday}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

          </Grid>

          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            mt={3}>

            <Link to="/clientes">
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

export default CreateCustomer