import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Main from "./components/Chillax/Main";
import FlashCardsTemplate from "./components/flashcards/pages/FlashCardsTemplate";
import pseudoCards from './components/flashcards/components/pseudoCards'
import CommunityPage from "./components/Community/CommunityPage";
import Home from "./components/Home";
import CreateFlashCardPage from "./components/flashcards/pages/CreateFlashCardPage";
import StudySets from "./components/flashcards/pages/StudySets";
import pseudoCards2 from './components/flashcards/components/pseusdoCards2'
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
=======
>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
import Comments from "./components/Community/CommentsSection";
import CommentPage from "./components/Community/CommentPage";
import PostFormProvider from "./components/Community/Contexts/PostFormContext";
import PostDataProvider from "./components/Community/Contexts/PostDataContext";
import Dashboard from "./components/Dashboard";



const App = () => {



  return (
    <div className="App">
     
        <Router>  
            <Routes>
                <Route path="/community" element={<CommunityPage />}/>
                <Route exact path="/" element={<Home />} />
                <Route path="/chillax" element={<Main />} />
                <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} /> 
                <Route path="/community" element={<CommunityPage/>}/>
                <Route path = "/studysets" element = {<StudySets /> } />
                <Route path='/createcard' element = {<CreateFlashCardPage />} />
            </Routes>
        </Router> 
<<<<<<< HEAD
             

=======
=======
              <Routes>
                 
                  <Route exact path="/" element={<Home />} />
                  <Route path="/community/:id" element={<CommunityPage/>}/>
                  <Route path="/chillax" element={<Main />} />
                  <Route path="comment/:id" element={<CommentPage/>} />
                  <Route path = "/flashcards/:id" element = {<FlashCardsTemplate />} />
                  <Route path="/createcard" element={<CreateFlashCardPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  
              </Routes>

            </Router>
>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
      
    </div>
  );
}

export default App;
