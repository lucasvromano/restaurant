import { useState } from "react"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import MiniDrawer from "../../../components/MiniDrawer"
import { createService } from "../../../store/reducers/services/handlers/createService";

const emptyFormData = {
  service: '',
  price: '',
}

const CreateService = () => {

  const [formData, setFormData] = useState(emptyFormData)
  const dispatch = useDispatch<any>()

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    await dispatch(createService({
      service: formData.service,
      price: formData.price
    }))
    setFormData(emptyFormData)
  }

  return (
    <MiniDrawer title="Cadastrar Atendimento">
      <Typography variant='h4' component='h1' >
        Cadastrar Atendimento
      </Typography>

      <Box my={3}>
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>

            <Grid xs={12} sm={6} item>
              <TextField
                id='service'
                name='service'
                label='Atendimento'
                variant='outlined'
                value={formData.service}
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

          </Grid>

          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            mt={3}>

            <Link to="/atendimentos">
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

export default CreateService