import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
        <Router>  
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/community/:id" element={<CommunityPage/>}/>
                  <Route path="/chillax" element={<Main />} />
                  {/* <Route path="/flashcards" element={<FlashCard />} /> */}
                  
              </Routes>

            </Router>
    </div>
  );
}

export default App;
