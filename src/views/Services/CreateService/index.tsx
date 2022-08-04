import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'

import MiniDrawer from "../../../components/MiniDrawer"
import { createService } from "../../../store/reducers/services/handlers/createService";
import { getServiceById } from "../../../store/reducers/services/handlers/getServiceById";
import { updateService } from "../../../store/reducers/services/handlers/updateService";

const emptyFormData = {
  service: '',
  price: '',
}

const CreateService = () => {

  const [formData, setFormData] = useState(emptyFormData);
  const dispatch = useDispatch<any>();
  const { id } = useParams();
  const isEdit = id !== undefined;

  useEffect(() => {
    const getService = async () => {
      const service = await dispatch(getServiceById(id));
      setFormData(service.payload);
    }

    isEdit && getService();

  }, [dispatch, id, isEdit]);

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const request = {
      service: formData.service,
      price: formData.price
    }

    if (isEdit) {
      await dispatch(updateService({ ...request, id: id }));
      return alert('Registro alterado com sucesso!');
    }

    await dispatch(createService(request));
    setFormData(emptyFormData);
    alert('Registro criado com sucesso!');
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

export default CreateService