import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";

import { Box, Button, Stack, Typography } from "@mui/material"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import MiniDrawer from "../../components/MiniDrawer"
import { useEffect, useState } from "react";
import { getAllUsers } from "../../store/reducers/users/handlers/getAllUsers";
import { deleteUser } from "../../store/reducers/users/handlers/deleteUser";

const Users = () => {
  const dispatch = useDispatch<any>();
  const [users, setUsers] = useState([]);

  const columns: GridColDef[] = [
    {
      field: 'employee',
      headerName: 'Funcionário',
      width: 500,
    },
    {
      field: 'userName',
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
        const handleDelete = async () => {
          try {
            await dispatch(deleteUser(e.id))
            setUsers(users.filter((user: { id: string }) => user.id !== e.id))
          } catch (err) {
            console.error(err)
          }
        }

        return (
          <>
            <Link to={`/usuarios/atualizar/${e.id}`}>
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
    const getUsers = async () => {
      const response = await dispatch(getAllUsers())
      const userList = response?.payload.map((item: any) => ({
        id: item.id,
        employee: item.employee.name,
        userName: item.userName
      }))

      setUsers(userList)
      return response;
    }
    getUsers()
  }, [dispatch])

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