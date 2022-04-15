import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
<<<<<<< HEAD
import FlashCardsTemplate from "./components/flashcards/pages/FlashCardsTemplate";
import pseudoCards from './components/flashcards/components/pseudoCards'
=======
import CommunityPage from "./components/Community/CommunityPage";
>>>>>>> e2e5b76857f205cecf61319ecb3f7835bf1d1c29
import Home from "./components/Home";
import CreateFlashCardPage from "./components/flashcards/pages/CreateFlashCardPage";
import StudySets from "./components/flashcards/pages/StudySets";
import pseudoCards2 from './components/flashcards/components/pseusdoCards2'

import { useParams } from "react-router-dom"
import CreateFlash from "./components/flashcards/pages/CreateFlashCard";



const App = () => {

   const { data }= useParams()

   console.log(data)

  return (
    <div className="App">
        <Router>  
              <Routes>
                  <Route path="/community" element={<CommunityPage/>}/>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/chillax" element={<Main />} />
                  {/* <Route path="/flashcards" element={<FlashCard />} /> */}
                  <Route path = "/flashcards/:data" element = {<FlashCardsTemplate cards = {pseudoCards}/>} /> 
                  <Route path = "/studysets" element = {<StudySets studysets = {pseudoCards2} /> } />
                  <Route path='/createcard' element = {<CreateFlashCardPage />} />
                  <Route path='/create' element = {<CreateFlash />} />

              </Routes>

            </Router>
    </div>
  );
}

export default App;
