import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import MiniDrawer from "../../../components/MiniDrawer"


const emptyFormData = {
  customer: '',
  employee: '',
  service: '',
  price: '',
  date: '',
}

const CreateService = () => {

  const [formData, setFormData] = useState(emptyFormData)

  const handleChange = (target: EventTarget & (HTMLInputElement | HTMLTextAreaElement)) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event?.preventDefault()
    console.log(formData)
    setFormData(emptyFormData)
  }

  return (
    <MiniDrawer title="Cadastrar Atendimento">
      <Typography variant='h4' component='h1' >
        Cadastrar Atendimento
      </Typography>

      <form onSubmit={handleSubmit}>

        <TextField
          id='customer'
          name='customer'
          label='Cliente'
          variant='outlined'
          value={formData.customer}
          onChange={({ target: value }) => handleChange(value)}
          fullWidth
        />

        <TextField
          id='employee'
          name='employee'
          label='Funcionário'
          variant='outlined'
          value={formData.employee}
          onChange={({ target: value }) => handleChange(value)}
          fullWidth
        />

        <TextField
          id='service'
          name='service'
          label='Atendimento'
          variant='outlined'
          value={formData.service}
          onChange={({ target: value }) => handleChange(value)}
          fullWidth
        />

        <TextField
          id='price'
          name='price'
          label='Valor'
          variant='outlined'
          value={formData.price}
          onChange={({ target: value }) => handleChange(value)}
          fullWidth
        />

        <TextField
          id='date'
          name='date'
          label='Data/Hora'
          variant='outlined'
          value={formData.date}
          onChange={({ target: value }) => handleChange(value)}
          fullWidth
        />

        <Button type="submit">
          Salvar
        </Button>

      </form>
    </MiniDrawer>
  )
}

export default CreateService