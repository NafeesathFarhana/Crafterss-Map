
import { Route, Routes } from 'react-router-dom';
import './App.css'
import FirstPage from './Pages/FirstPage';
import Home from './Pages/Home';
import Craft from './Pages/Craft';
import Knitting from './Pages/Knitting';
import Supplies from './Pages/Supplies';
import Main from './Pages/Main';
import View from './Pages/View';
import KnitView from './Pages/KnitView';
import MyWorks from './Pages/MyWorks';



function App() {
  return (
    <div className="App">
   
 
 <Routes>
<Route path='/' element={<Main/>} />
<Route path='/home/:userId' element={<Home/>} />
<Route path='/login/reg' element={<FirstPage/>}/>
<Route path='/craft/:userId' element={<Craft/>} />
<Route path='/knit/:userId' element={<Knitting/>}  />
<Route path='/supplies/:userId' element={<Supplies/>}  />
<Route path='/view/:userId' element={<View/>}/>
<Route path='/knitview/:userId' element={<KnitView/>}/>
<Route path='/myworks/:userId'  element={<MyWorks/>} />
 </Routes>
    </div>
  );
}

export default App;
