import { Box, Button, Stack, Typography } from "@mui/material"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom"

import MiniDrawer from "../../components/MiniDrawer"
import { useSelector } from "react-redux";

import { RootState } from '../../store';

const columns: GridColDef[] = [
  // {
  //   field: 'id',
  //   headerName: 'ID',
  //   width: 150
  // },
  {
    field: 'employee',
    headerName: 'Funcionário',
    width: 500,
  },
  {
    field: 'user',
    headerName: 'Usuário',
    width: 300,
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


const Users = () => {
  const users = useSelector((state: RootState) => state.users);

  return (
    <MiniDrawer title="Usuários">
      <Stack role="container-users">
        <Box mb={3} display='flex' justifyContent='space-between'>
          <Typography variant='h4' component='h1' >
            Usuários
          </Typography>

          <Link to='/usuarios/cadastrar'>
            <Button
              startIcon={<AddIcon />}
              color='success'>
              Cadastrar
            </Button>
          </Link>
        </Box>

        <Box bgcolor='white' width='100%' height={400}>
          <DataGrid
            rows={users}
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
  )
}

export default Users