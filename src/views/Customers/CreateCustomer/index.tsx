import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import MiniDrawer from "../../../components/MiniDrawer"

import { createCustomer } from "../../../store/reducers/customers/handlers/createCustomer";
import { getCustomerById } from "../../../store/reducers/customers/handlers/getCustomerById";
import { updateCustomer } from "../../../store/reducers/customers/handlers/updateCustomer";

const emptyFormData = {
  name: '',
  document: '',
  phone: '',
  email: '',
  birthday: '',
}

const CreateCustomer = () => {

  const [formData, setFormData] = useState(emptyFormData);
  const dispatch = useDispatch<any>();
  const { id } = useParams();
  const isEdit = id !== undefined;

  useEffect(() => {
    const getCustomer = async () => {
      const customer = await dispatch(getCustomerById(id));
      setFormData(customer.payload);
    }

    isEdit && getCustomer();

  }, []);

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const request = {
      name: formData.name,
      document: formData.document,
      phone: formData.phone,
      email: formData.email,
      birthday: formData.birthday,
    }

    if (isEdit) {
      await dispatch(updateCustomer({ ...request, id: id }));
      return alert('Registro alterado com sucesso!');
    }

    await dispatch(createCustomer(request));
    setFormData(emptyFormData);
    alert('Registro criado com sucesso!');
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
              startIcon={isEdit ? <EditIcon /> : <SaveIcon />}
              variant='contained'
              color='success'
              type="submit">
              {isEdit ? 'Editar' : 'Salvar'}
            </Button>
          </Box>

        </form>
      </Box >
    </MiniDrawer >
  )
}

export default CreateCustomer