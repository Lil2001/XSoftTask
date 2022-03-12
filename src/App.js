import { Route,Routes} from "react-router-dom"

import Wrapper from "./Components/Wrapper/Wrapper";
import HomePage from "./Ui/HomePage/HomePage";


function App() {
  return (
    <Wrapper>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
