
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ForgotPassword from "./ForgotPassword";
import Schedules from "./Schedules";
import Login from "./Login";
import CreateSchedule from "./Schedules/CreateSchedule";
import Users from "./Users";
import CreateUser from "./Users/CreateUser";
import Employees from "./Employees";
import CreateEmployee from "./Employees/CreateEmployee";
import Customers from "./Customers";
import CreateCustomer from "./Customers/CreateCustomer";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueci-a-senha" element={<ForgotPassword />} />

        <Route path="/agendamentos" element={<Schedules />} />
        <Route path="/agendamentos/cadastrar" element={<CreateSchedule />} />

        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/cadastrar" element={<CreateUser />} />

        <Route path="/funcionarios" element={<Employees />} />
        <Route path="/funcionarios/cadastrar" element={<CreateEmployee />} />

        <Route path="/clientes" element={<Customers />} />
        <Route path="/clientes/cadastrar" element={<CreateCustomer />} />
      </Routes>
    </Router>
  </>
)

export default App