import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { AppHeader } from './components/AppHeader/AppHeader';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';

export function App() {

  const PrivateRoute = (props) => {
    return props.isAdmin ? <Route component={props.component} path={props.path} /> : <Redirect to="/" />
  }

  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={ContactEditPage} path='/contact/edit/:id?' />

          <Route component={ContactDetailsPage} path='/contact/:id' />

          <PrivateRoute component={ContactPage} isAdmin={true} path='/contact-page' />

          <Route component={HomePage} path='/' />

          {/* <Route component={ContactPage} path='/contact-page' /> */}
        </Switch>
      </div>
    </Router>
  );
}

