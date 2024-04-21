import Portfolio from "pages/Portfolio/Portfolio";
import Navbar from "./navbar/Navbar";
import { Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route index element={<Portfolio />}></Route>
   </Routes>
     </div>

  );
};


export default App;