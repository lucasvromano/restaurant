
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Orders from "./Orders";
import Login from "./Login";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/esqueci-a-senha" element={<ForgotPassword />} />
          <Route path="/pedidos" element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}

export default App