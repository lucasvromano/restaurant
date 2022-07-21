
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Services from "./Services";
import Login from "./Login";
import CreateService from "./Services/CreateService";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/esqueci-a-senha" element={<ForgotPassword />} />
          <Route path="/atendimentos" element={<Services />} />
          <Route path="/atendimentos/cadastrar" element={<CreateService />} />
        </Routes>
      </Router>
    </>
  )
}

export default App