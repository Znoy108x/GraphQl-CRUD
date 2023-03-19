import {BrowserRouter as Router , Routes , Route , useNavigate} from "react-router-dom"
import Home from "./page/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}
export default App;