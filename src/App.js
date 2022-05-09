import './App.css';
import { Route, Switch } from 'react-router-dom';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';
import Home from './pages/Home';
import Video from './pages/Video';
import Diary from './pages/Diary';

function App() {
  return (
    <div className="App">
      <MyHeader headText={'APP'} />
      <h1> 유튜브 홈트족 </h1>
      <MyButton text={'버튼'} onClick={() => alert('')} type={'default'}/>
      <MyButton text={'버튼'} onClick={() => alert('')} type={'negative'}/>
      <MyButton text={'버튼'} onClick={() => alert('')} type={'positive'}/>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/video" element={<Video />} />
      <Route exact path="/diary" element={<Diary />} />
    </div>
  );
}

export default App;
