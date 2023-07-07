import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/routes'
import AppCSS from "./App.css";



function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App