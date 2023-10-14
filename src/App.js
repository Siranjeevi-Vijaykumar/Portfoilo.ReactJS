import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Menu} from './component/Menu/Menu'
import {Congrats} from './component/Congrats Card/Congrats Card'
import {Login} from './component/Login Design/Login Design'
import {Notifications} from './component/Notifications app/Notifications app'
import {Social} from './component/Social Buttons/Social Buttons'
import {Superover} from './component/super over/superover'
import {Technology} from './component/Technology Cards/Technology Cards'
import {Feedback} from './component/Feedback/Feedback'
import {FeedBack1} from './component/Feedback/Feedback1'
import {InDeRE} from './component/Hooks ass/increment,decrement,reset'
import {FriutsCounter} from './component/Fruits Counter/Fruits Counter'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import {DateFunction} from './component/Date/Date'
import {Datajson} from './component/Json File/Json File'
import{ Detail } from './component/Json File/detail'
import { Detailjson } from './component/Json File/JSON_FILE';
import { Jsoncard } from './component/json2/json';
import { Jatadate } from './component/json2/jsonpro';
import { Portfolio } from './component/portfolio/portfolio'
import { Portfoliohome } from './component/portfolio/home'
import {AboutUS} from './component/portfolio/About'
import { SkillPortfolio } from './component/portfolio/Skill';
import { Resume } from './component/portfolio/resume'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Portfolio/>,<Portfoliohome/>]}></Route>
      <Route path='/home' element={[<Portfolio/>,<Portfoliohome/>]}></Route>
      <Route path='/aboutus' element={[<Portfolio/>,<AboutUS/>]}></Route>
      <Route path='/skill' element={[<Portfolio/>,<SkillPortfolio/>]}></Route>
      <Route path='/resume' element={[<Portfolio/>,<Resume/>]}></Route>
      <Route path='/project' element={[<Menu/>]}></Route>
      <Route path='/Jsoncard:id' element={[<Menu/>,<Jatadate/>]}></Route>
      <Route path='/Congrats' element={[<Menu/>,<Congrats/>]}></Route>
      <Route path='/Login' element={[<Menu/>,<Login/>]}></Route>
      <Route path='/Notifications' element={[<Menu/>,<Notifications/>]}></Route>
      <Route path='/Social' element={[<Menu/>,<Social/>]}></Route>
      <Route path='/Superover' element={[<Menu/>,<Superover/>]}></Route>
      <Route path='/Technology' element={[<Menu/>,<Technology/>]}></Route> 
      <Route path='/FeedBack' element={[<Menu/>,<Feedback/>]}></Route>
      <Route path='/FeedBack/FeedBack1' element={[<Menu/>,<FeedBack1/>]}></Route>
      <Route path='/Counter' element={[<Menu/>,<InDeRE/>]}></Route>
      <Route path='/Fruits' element={[<Menu/>,<FriutsCounter/>]}></Route>
      <Route path='/DateFunction' element={[<Menu/>,<DateFunction/>]}></Route>
      <Route path='/Datajson' element={[<Menu/>,<Datajson/>]}></Route>
      <Route path='/details/:id' element={[<Menu/>,<Detailjson/>]}></Route>
    </Routes>
    </BrowserRouter>
    </>
    

  );
}

export default App;
