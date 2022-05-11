import './App.scss';
import { Route } from 'react-router-dom';
import MyHeader from './components/MyHeader';
import VideoList from './pages/VideoList';
import DiaryEdit from './pages/DiaryEdit';
import DiaryList from './pages/DiaryList';

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month  + '-' + day;

  return (
    <div className="App">
      <>
      <MyHeader headText={'홈트 다이어리'} rightChild={dateString} />
      <div className="Intro">운동하기 원하는 부위를 선택해 주세요.</div>
      <ul className="VideoSelect">
        <li>팔</li>
        <li>복부</li>
        <li>허벅지</li>
        <li>전신</li>
      </ul>
    
      <Route exact path="/video-list/:sort"><VideoList /></Route>
      <Route exact path="/diary-edit"><DiaryEdit /></Route>
      <Route exact path="/diary-list/:id"><DiaryList /></Route>
      </>
    </div>
  );
}

export default App;
