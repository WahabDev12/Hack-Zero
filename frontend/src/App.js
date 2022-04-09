import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
        <Router>  
              <Routes>
                  <Route path="/community" element={<CommunityPage/>}/>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/chillax" element={<Main />} />
                 
              </Routes>

            </Router>
    </div>
  );
}

export default App;
