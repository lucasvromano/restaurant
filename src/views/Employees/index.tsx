import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

import { Box, Button, Stack, Typography } from "@mui/material"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import MiniDrawer from "../../components/MiniDrawer"
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
    width: 500,
  },
  {
    field: 'document',
    headerName: 'CPF',
    width: 300,
  },
  {
    field: 'phone',
    headerName: 'Telefone',
    width: 300,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 300,
  },
  {
    field: 'salary',
    headerName: 'Salário',
    width: 300,
  },
  {
    field: 'birthday',
    headerName: 'Data Nasc.',
    width: 300,
  },
  {
    field: 'options',
    headerName: 'Opções',
    description: 'Opção de edição ou exclusão do funcionário.',
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

const Employees = () => {

  const employees = useSelector((state: RootState) => state.employees);
  
  return (
    <MiniDrawer title="Funcionários">
      <Stack role="container-users">
        <Box mb={3} display='flex' justifyContent='space-between'>
          <Typography variant='h4' component='h1' >
            Funcionários
          </Typography>

          <Link to='/funcionarios/cadastrar'>
            <Button
              startIcon={<AddIcon />}
              color='success'>
              Cadastrar
            </Button>
          </Link>
        </Box>

        <Box bgcolor='white' width='100%' height={400}>
          <DataGrid
            rows={employees}
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
export default Employees