import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import { useState } from "react"
import MiniDrawer from "../../../components/MiniDrawer"

import { v4 as uuid } from 'uuid'

import { useDispatch } from 'react-redux';
import { addService } from "../../../store/reducers/services";


const emptyFormData = {
  id: '',
  customer: '',
  employee: '',
  services: '',
  price: '',
  date: '',
}


const CreateService = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const dispatch = useDispatch()

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({ 
      ...formData, 
      id: uuid(), 
      [target.name]: target.value })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch(addService(formData))
    setFormData(emptyFormData)
  }

  return (
    <MiniDrawer title="Cadastrar Atendimento">
      <Typography variant='h4' component='h1' >
        Cadastrar Atendimento
      </Typography>

      <Box my={3} >
        <form onSubmit={handleSubmit}>


          <Grid container spacing={3}>

            <Grid xs={12} sm={6} item>
              <TextField
                id='customer'
                name='customer'
                label='Cliente'
                variant='outlined'
                value={formData.customer}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

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
                id='services'
                name='services'
                label='Atendimento'
                variant='outlined'
                value={formData.services}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='price'
                name='price'
                label='Valor'
                variant='outlined'
                value={formData.price}
                onChange={({ target: value }) => handleChange(value)}
                fullWidth
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                id='date'
                name='date'
                label='Data/Hora'
                variant='outlined'
                value={formData.date}
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

            <Button>
              Voltar
            </Button>

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

export default CreateService