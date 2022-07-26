import { BrowserRouter } from 'react-router-dom';
import Main from './pages/registration/Main';
import TeacherMain from './pages/teacher/TeacherMain';

function App() {
  return (
    <BrowserRouter>
      <Main />
      <TeacherMain />
    </BrowserRouter>
  );
}

export default App;
