import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

import MiniDrawer from '../../components/MiniDrawer'
import { useEffect, useState } from 'react';
import { getAllSchedules } from '../../store/reducers/schedules/handler/getAllSchedules';

const columns: GridColDef[] = [
  {
    field: 'customer',
    headerName: 'Cliente',
    width: 200,
  },
  {
    field: 'employee',
    headerName: 'Funcionário',
    width: 200,
  },
  {
    field: 'service',
    headerName: 'Atendimento',
    width: 330,
  },
  {
    field: 'price',
    headerName: 'Valor',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Data/Hora',
    width: 150,
  },
  {
    field: 'options',
    headerName: 'Opções',
    description: 'Opção de edição ou exclusão do agendamento.',
    sortable: false,
    filterable: false,
    width: 150,
    renderCell: (e) => {
      return (
        <>
          <Button
            onClick={() => alert('Editar: ' + e.id)}>
            <EditIcon />
          </Button>
          <Button
            color='error'
            onClick={() => alert('Excluir: ' + e.id)}>
            <DeleteIcon />
          </Button>
        </>
      )
    }

  },
];

const Schedules = () => {
  const dispatch = useDispatch<any>();
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    const getSchedules = async () => {
      const response = await dispatch(getAllSchedules())

      const scheduleList = response?.payload.map((item: any) => ({
        id: item.id,
        customer: item.customer.name,
        employee: item.employee.name,
        service: item.service.service,
        price: item.service.price,
        date: item.date,
        user: item.user
      }))

      setSchedules(scheduleList)
      return response;
    }
    getSchedules()
  }, [dispatch])

  return (
    <>
      <MiniDrawer title="Agendamento">
        <Stack role="container-schedules">
          <Box mb={3} display='flex' justifyContent='space-between'>
            <Typography variant='h4' component='h1' >
              Agendamento
            </Typography>

            <Link to='/agendamentos/cadastrar'>
              <Button
                startIcon={<AddIcon />}
                color='success'>
                Cadastrar
              </Button>
            </Link>
          </Box>

          <Box bgcolor='white' width='100%' height={400}>
            <DataGrid
              rows={schedules}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            />
          </Box>
        </Stack>
      </MiniDrawer>
    </>
  )
}

export default Schedules