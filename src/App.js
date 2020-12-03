import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import About from './components/about/About';

function App() {
    return (
        <Router>
            <div className='container'>
                <Navbar />
                <Switch>
                    <Route path='/main' component={Main} />
                    <Route path='/search' component={Search} />
                    <Route path='/about' component={About} />
                    <Route
                        path=''
                        exact
                        render={() => <Redirect to='/main' />}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
