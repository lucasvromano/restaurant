
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

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/esqueci-a-senha" element={<ForgotPassword />} />

          <Route path="/agendamentos" element={<Schedules />} />
          <Route path="/agendamentos/cadastrar" element={<CreateSchedule />} />

          <Route path="/usuarios" element={<Users />} />
          <Route path="/usuarios/cadastrar" element={<CreateUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App