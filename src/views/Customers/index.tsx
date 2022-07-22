import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

import MiniDrawer from '../../components/MiniDrawer'
import { RootState } from '../../store';

const columns: GridColDef[] = [
  // {
  //   field: 'id',
  //   headerName: 'ID',
  //   width: 150
  // },
  {
    field: 'name',
    headerName: 'Nome',
    width: 200,
  },
  {
    field: 'document',
    headerName: 'CPF',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Telefone',
    width: 330,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 90,
  },
  {
    field: 'birthday',
    headerName: 'Data Nasc.',
    width: 150,
  },
  {
    field: 'options',
    headerName: 'Opções',
    description: 'Opção de edição ou exclusão do cliente.',
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

const Customers = () => {

  const customers = useSelector((state: RootState) => state.customers);

  return (
    <>
      <MiniDrawer title="Clientes">
        <Stack role="container-schedules">
          <Box mb={3} display='flex' justifyContent='space-between'>
            <Typography variant='h4' component='h1' >
              Clientes
            </Typography>

            <Link to='/clientes/cadastrar'>
              <Button
                startIcon={<AddIcon />}
                color='success'>
                Cadastrar
              </Button>
            </Link>
          </Box>

          <Box bgcolor='white' width='100%' height={400}>
            <DataGrid
              rows={customers}
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

export default Customers