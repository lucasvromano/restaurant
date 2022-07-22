//tests
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

//routers
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from "react-router-dom";

//components
import Login from ".";
import Schedules from "../Schedules";

// utils
import { resizeWindow } from '../../utils/resizeWindow'
import ForgotPassword from "../ForgotPassword";
import { Provider } from "react-redux";
import store from "../../store";

const loginIsRendered = (
  <Router>
    <Login />
  </Router>
)

describe('Login Page', () => {

  test('Deve iniciar com os campos vazios', () => {
    render(loginIsRendered)

    const inputUser = screen.getByLabelText(/Usuário/i) as HTMLInputElement
    const inputPassword = screen.getByLabelText(/Senha/i) as HTMLInputElement

    expect(inputUser.value).toBe('')
    expect(inputPassword.value).toBe('')
  })

  test('Deve fazer o toggle de ocultar e exibir senha ao clicar no ícone de olho', () => {
    render(loginIsRendered)

    const iconPassword = screen.getByRole('iconPassword')
    const visibility = screen.getByTestId('visibility')

    expect(visibility).toBeInTheDocument()

    fireEvent.click(iconPassword)

    const visibilityOff = screen.getByTestId('visibilityOff')
    expect(visibilityOff).toBeInTheDocument()
    expect(visibility).not.toBeInTheDocument()
  })

  test('Deve exibir o container de imagem no DOM apenas quando a largura do viewport for superior a 600px', async () => {
    render(loginIsRendered)

    act(() => {
      resizeWindow(600, 600)
    })

    if (window.innerWidth >= 600) {
      const containerImage = await screen.queryByRole('containerImage')
      expect(containerImage).toBeInTheDocument()
    }

    act(() => {
      resizeWindow(500, 600)
    })

    if (window.innerWidth < 600) {
      const containerImage = await screen.queryByRole('containerImage')
      expect(containerImage).not.toBeInTheDocument()
    }

  });

  test('Deve ir para página de Esqueci a Senha', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/esqueci-a-senha' element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    )

    const forgotPasswordButton = screen.getByRole('forgot-password')
    fireEvent.click(forgotPasswordButton)

    await waitFor(() => {
      const forgotPassword = screen.getByText(/Esqueceu a senha?/i)
      expect(forgotPassword).toBeInTheDocument()
    })

  })

  test('Deve ir para a página de Atendimentos', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/agendamentos' element={<Schedules />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    const schedulessButton = screen.getByRole('schedules')
    fireEvent.click(schedulessButton)

    await waitFor(() => {
      const containerSchedule = screen.getByRole('container-schedules')
      expect(containerSchedule).toBeInTheDocument()
    })
  })
})