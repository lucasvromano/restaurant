import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";

import { Box, Button, Stack, Typography } from "@mui/material"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import MiniDrawer from "../../components/MiniDrawer"
import { useEffect, useState } from "react";
import { getAllServices } from "../../store/reducers/services/handlers/getAllServices";

const columns: GridColDef[] = [
  {
    field: 'service',
    headerName: 'Atendimento',
    width: 500,
  },
  {
    field: 'price',
    headerName: 'Preço',
    width: 300,
  },
  {
    field: 'options',
    headerName: 'Opções',
    description: 'Opção de edição ou exclusão do atendimento.',
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
  const dispatch = useDispatch<any>();
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const response = await dispatch(getAllServices())
      setServices(response?.payload)
      return response;
    }
    getServices()
  }, [dispatch])

  return (
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
  )
}

export default Services