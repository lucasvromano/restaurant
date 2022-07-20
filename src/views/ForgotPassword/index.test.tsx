//tests
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

//routers
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from "react-router-dom";

//components
import ForgotPassword from ".";
import Login from '../Login'

// utils
import { resizeWindow } from '../../utils/resizeWindow'

const forgotPasswordIsRendered = (
  <Router>
    <ForgotPassword />
  </Router>
)

describe('Forgot Password Page', () => {

  test('Deve iniciar com o campo vazio', () => {
    render(forgotPasswordIsRendered)

    const inputEmail = screen.getByLabelText(/E-mail/i) as HTMLInputElement
    expect(inputEmail.value).toBe('')
  })

  test('Deve exibir o container de imagem no DOM apenas quando a largura do viewport for superior a 600px', async () => {
    render(forgotPasswordIsRendered)

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

  })

  test('Deve ir para página de Login', async () => {
    render(
      <MemoryRouter initialEntries={['/esqueci-a-senha']}>
        <Routes>
          <Route path='/esqueci-a-senha' element={<ForgotPassword />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </MemoryRouter>
    )

    const loginButton = screen.getByRole('login')
    fireEvent.click(loginButton)

    await waitFor(() => {
      const titleLogin = screen.getByText(/Login/i)
      expect(titleLogin).toBeInTheDocument()
    })

  })

  test('Deve fazer o POST para recuperação de senha', () => {
    render(forgotPasswordIsRendered)
  })

})