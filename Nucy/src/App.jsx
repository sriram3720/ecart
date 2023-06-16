import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
//import ProtectedRoute from './components/protectedRoute';
import Login from "./components/login/index.jsx";
import Register from "./components/register/index.jsx";
//import { useAuth } from './hooks/useAuth';
 import ProductPage from "./components/product/index.jsx";
 import { isAuthenticated } from './components/auth';
function App() {
  // const isAuthenticated = isAuthenticated();
  // console.log(isAuthenticated)
  const PrivateRoute = ({ path, element }) => {
    // const { isAuthenticated } =  isAuthenticated();
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
  };

  return (
    <>
   
   <Router>
    <Routes>
    
   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register/>} />
   <Route path="/product" element={<PrivateRoute element={<ProductPage />} />} />
    </Routes>
    </Router>
   
    </>
  )
}

export default App
