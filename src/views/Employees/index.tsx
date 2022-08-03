import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";

import { Box, Button, Stack, Typography } from "@mui/material"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import MiniDrawer from "../../components/MiniDrawer"
import { useEffect, useState } from "react";
import { getAllEmployees } from "../../store/reducers/employees/handlers/getAllEmployees";
import { deleteEmployee } from "../../store/reducers/employees/handlers/deleteEmployee";

const Employees = () => {
  const dispatch = useDispatch<any>();
  const [employees, setEmployees] = useState([]);

  const columns: GridColDef[] = [
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
        const handleDelete = async () => {
          try {
            await dispatch(deleteEmployee(e.id))
            setEmployees(employees.filter((employee: { id: string }) => employee.id !== e.id))
          } catch (err) {
            console.error(err)
          }
        }

        return (
          <>
            <Link to={`/funcionarios/atualizar/${e.id}`}>
              <Button>
                <EditIcon />
              </Button>
            </Link>

            <Button
              color='error'
              onClick={handleDelete}>
              <DeleteIcon />
            </Button>
          </>
        )
      }
    },
  ];

  useEffect(() => {
    const getEmployees = async () => {
      const response = await dispatch(getAllEmployees())
      setEmployees(response?.payload)
      return response;
    }
    getEmployees()
  }, [dispatch])

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