import { useState } from 'react'
import { Link } from 'react-router-dom';

import { DataGrid, GridColDef, ptBR } from '@mui/x-data-grid';
import { Button, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

import MiniDrawer from '../../components/MiniDrawer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCustomers } from '../../store/reducers/customers/handlers/getAllCustomers';
import { deleteCustomer } from '../../store/reducers/customers/handlers/deleteCustomer';

const Customers = () => {
  const dispatch = useDispatch<any>();
  const [customers, setCustomers] = useState([])

  const columns: GridColDef[] = [
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
        const handleDelete = async () => {
          try {
            await dispatch(deleteCustomer(e.id))
            setCustomers(customers.filter((customer: { id: string }) => customer.id !== e.id))
          } catch (err) {
            console.error(err)
          }
        }

        return (
          <>
            <Button
              onClick={() => alert('Editar: ' + e.id)}>
              <EditIcon />
            </Button>
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
    const getCustomers = async () => {
      const response = await dispatch(getAllCustomers())
      setCustomers(response?.payload)
      return response;
    }
    getCustomers()
  }, [])

  return (
    <>
      <MiniDrawer title="Clientes">
        <Stack role="container-schedules">
          <Box mb={3} display='flex' justifyContent='space-between'>
            <Typography variant='h4' component='h1'>
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