import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation';
import UserList from './Components/UserList';
import UserListAxios from './Components/UserListAxios';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      {/* <Route exact path='/' component={UserList} /> */}
      <Route exact path='/' component={UserListAxios} />
      <Route exact path='/profile/:id' render={(props)=> <UserProfile {...props}/>} />
      </Switch>
     
    </div>
  );
}

export default App;
