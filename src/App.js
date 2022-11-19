import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Education from './components/education/education';
import { Routes, Route } from "react-router-dom";
import Bullied from './components/education/bullied';
import Students from './components/education/students';
import BulliedQuiz from './components/quiz/bulliedQuiz';
import Teacher from './components/education/teacher';
import StudentsQuiz from './components/quiz/studentsQuiz';
import TeacherQuiz from './components/quiz/teacherQuiz';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/education' element={<Education/>}/>
      <Route path='/education/bullied' element={<Bullied/>}/>
      <Route path='/education/students' element={<Students/>}/>
      <Route path='/education/teacher' element={<Teacher/>}/>
      <Route path='/education/students/bulliedQuiz' element={<BulliedQuiz/>}/>
      <Route path='/education/students/studentsQuiz' element={<StudentsQuiz/>}/>
      <Route path='/education/students/teacherQuiz' element={<TeacherQuiz/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
