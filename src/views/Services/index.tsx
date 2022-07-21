import MiniDrawer from '../../components/MiniDrawer'
import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';



const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'customer',
    headerName: 'Cliente',
    width: 200,
    editable: true,
  },
  {
    field: 'employee',
    headerName: 'Funcionário',
    width: 200,
    editable: true,
  },
  {
    field: 'services',
    headerName: 'Atendimento',
    width: 330,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Valor',
    width: 90,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Data/Hora',
    width: 150,
    editable: true,
  },
  {
    field: 'options',
    headerName: 'Opções',
    description: 'This column has a value getter and is not sortable.',
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

const Services = () => {

  const services = useSelector((state: RootState) => state.services);

  return (
    <>
      <MiniDrawer title="Atendimentos">
        <Stack role="container-services">
          <Box mb={3} display='flex' justifyContent='space-between'>
            <Typography variant='h4' component='h1' >
              Atendimentos
            </Typography>

            <Link to='/atendimentos/cadastrar'>
              <Button
                startIcon={<AddIcon />}
                color='success'>
                Cadastrar
              </Button>
            </Link>
          </Box>

          <Box bgcolor='white' width='100%' height={400}>
            <DataGrid
              rows={services}
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

export default Services