
import './App.css';
//import Post from './Posts'
import Header from './Header';
import {Route,Routes} from "react-router-dom";
import Layout from './Layout';
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { UserContext, UserContextProvider } from './UserContext';
import EditPosts from './pages/EditPosts';
import Posts from './Posts';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';

function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path={'/login'} element={<Loginpage/>} />
      <Route path={'/register'} element={<Registerpage/>}/>
      <Route path='/create' element= {<CreatePost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path='/edit/:id' element={<EditPosts/>}/>
      </Route>
    </Routes>

    </UserContextProvider>
  );
}

export default App;
