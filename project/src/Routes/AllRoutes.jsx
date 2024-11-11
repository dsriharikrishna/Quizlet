import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home';
import About from '../pages/About';
import Grids from '../components/Grids';
import Cards from '../components/Cards';
import Footers from '../components/Footer/Footers';
import FlashCards from '../components/Students/FlashCards';
import Live from '../components/Teachers/Live';
import Blog from '../pages/Blog';
import ExpertSolutions from '../components/Students/ExpertSolutions';
import Learn from '../components/Students/Learn';
import StudyGuides from '../components/Students/StudyGuides';
import ArtsHumanities from '../components/Subjects/ArtsHumanities';
import Exams from '../components/Subjects/Exams';
import Literature from '../components/Subjects/Literature';
import Math from '../components/Subjects/Math';
import Other from '../components/Subjects/Other';
import Science from '../components/Subjects/Science';
import SocialScience from '../components/Subjects/SocialScience';
import Teacher from '../components/Teachers/Teacher';
import AppStore from '../components/AppStore';
import Test from '../components/Students/Test';
import Signup from '../components/Login/Signup';
import LoginPage from '../components/Login/LoginPage';
import Create from '../components/NavBar/Create'

const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Grids" element={<Grids/>}/>
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/Footers" element={<Footers/>} />
          <Route path="/FlashCards" element={<FlashCards/>}/>
          <Route path="/Live" element={<Live/>} />
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/ExpertSolutions" element={<ExpertSolutions/>}/>
          <Route path="/Learn" element={<Learn/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/StudyGuides" element={<StudyGuides/>}/>
          <Route path='/ArtsandHumanities' element={<ArtsHumanities/>}/>
          <Route path='/Exams' element={<Exams/>}/>
          <Route path='/Literature' element={<Literature/>}/>
          <Route path='/Math' element={<Math />}/>
          <Route path='/Others' element={<Other/>}/>
          <Route path='/Science' element={<Science/>}/>
          <Route path='/SocialScience' element={<SocialScience/>}/>
          <Route path='/Teacher' element={<Teacher/>}/>
          <Route path='/AppStore' element={<AppStore/>}/>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path='/Signup' element={<Signup/>}/>
          <Route path="/create" element={<Create />} />

         </Routes>
         <Footers/>
      </BrowserRouter>
    </div>
  );
};

export default AllRoutes;


