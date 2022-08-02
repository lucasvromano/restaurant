import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"

import { Button, TextField, Typography, Box, Grid, Autocomplete } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save'
import MiniDrawer from "../../../components/MiniDrawer"
import { getAllCustomers } from "../../../store/reducers/customers/handlers/getAllCustomers";
import { createCustomer } from "../../../store/reducers/customers/handlers/createCustomer";
import { getAllEmployees } from "../../../store/reducers/employees/handlers/getAllEmployees";
import { getAllServices } from "../../../store/reducers/services/handlers/getAllServices";

const emptyFormData = {
  customer: {
    id: '',
    name: ''
  },
  employee: {
    id: '',
    name: ''
  },
  services: [],
  price: null,
  date: '',
}

const CreateService = () => {

  const [formData, setFormData] = useState(emptyFormData);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState([]);
  const dispatch = useDispatch<any>();

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    dispatch(createCustomer({
      customer: formData.customer,
      employee: formData.employee,
      services: formData.services,
      price: formData.price,
      date: formData.date,
    }))
    setFormData(emptyFormData)
  }

  const handleChangeCustomers = (_e: any, value: { id: string; name: string; }) => {
    setFormData({
      ...formData,
      customer: {
        id: value?.id,
        name: value?.name,
      }
    })
  }

  const handleChangeEmployees = (_e: any, value: { id: string; name: string;}) => {
    setFormData({
      ...formData,
      employee: {
        id: value?.id,
        name: value?.name,
      }
    })
  }

  const handleChangeServices = (_e: any, value: any) => {
    value.map((item: any) => console.log(item.price))

    setFormData({
      ...formData,
      services: value.map((item: any) => item.service),
      price: value.map((item: any) => item.price).reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0),
    })
  }

  useEffect(() => {
    const getCustomers = async () => {
      const response = await dispatch(getAllCustomers())
      setCustomers(response?.payload)
    }
    const getEmployee = async () => {
      const response = await dispatch(getAllEmployees())
      setEmployees(response?.payload)
    }
    const getServices = async () => {
      const response = await dispatch(getAllServices())
      setServices(response?.payload)
    }

    getCustomers();
    getEmployee();
    getServices();

  }, [dispatch])

  return (
    <MiniDrawer title="Cadastrar Agendamento">
      <Typography variant='h4' component='h1' >
        Cadastrar Agendamento
      </Typography>

      <Box my={3}>
        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>

            <Grid xs={12} sm={6} item>
              <Autocomplete
                disablePortal
                fullWidth
                id='customer'
                options={customers}
                getOptionLabel={(option: any) => option.name}
                onChange={(e, value) => handleChangeCustomers(e, value)}
                renderInput={(params) => <TextField {...params} label="Cliente" />}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <Autocomplete
                disablePortal
                fullWidth
                id='employee'
                options={employees}
                getOptionLabel={(option: any) => option.name}
                onChange={(e, value) => handleChangeEmployees(e, value)}
                renderInput={(params) => <TextField {...params} label="Funcionário" />}
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <Autocomplete
                multiple
                id="services"
                options={services}
                getOptionLabel={(option: any) => option.service}
                filterSelectedOptions
                onChange={(e, value) => handleChangeServices(e, value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Atendimentos"
                  />
                )}
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
                disabled
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

            <Link to="/agendamentos">
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