import {NavBar, Chat, Login} from './components'
import {Routes,Route} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import MainLayout from "./layouts/mainLayout";

function App() {
    return (
    <div id='App'>
           <Routes>
               <Route path='/' element={<MainLayout/>}>
                   <Route index element={<NavBar/>}></Route>
                   <Route path='chat' element={<Chat/>}/>
                   <Route path='login' element={<Login/>}/>
               </Route>
           </Routes>
    </div>
  );
}

export default App;
