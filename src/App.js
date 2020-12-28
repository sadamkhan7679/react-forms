import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom' ;
import NavBar from './components/navbar';
import AuthForm from './components/Auth';
import AddBusiness from './components/Business/addBusiness';
import EditBusiness from './components/Business/editBusiness';
import AddCategories from './components/Categories/addCategories';
import EditCategories from './components/Categories/editCategories';
import AddReview from './components/Review/addReview';
import EditReview from './components/Review/editReview';
import AddStatus from './components/Status/addStatus';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component = {AuthForm}/>
        <Route path = '/addbusiness' component = {AddBusiness}/>
        <Route path = '/editbusiness' component = {EditBusiness}/>
        <Route path = '/addcategory' component = {AddCategories}/>
        <Route path = '/editcategory' component = {EditCategories}/>
        <Route path = '/addreview' component = {AddReview}/>
        <Route path = '/editreview' component = {EditReview}/>
        <Route path = '/addstatus' component = {AddStatus}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
