import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import EmergencyPage from './components/EmergencyPage';
import SearchDirectoryPage from './components/SearchDirectoryPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import AddResource from './components/AddResource';
import Forms from './components/Forms';
import Homepage from './components/Homepage';
import RegisterPage from './components/RegisterPage';
import ResetPassword from './components/ResetPassword';
import SearchNavLinks from './components/SearchNavLinks';
import UserProfile from './components/UserProfile';
import ScrollToTop from './components/ScrollToTop';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadAccount } from './actions/auth';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadAccount());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<ScrollToTop />
				<Alert />
				<Switch>
					<Route path="/" component={LandingPage} exact />
					<Route path="/contact" component={ContactPage} />
					<Route path="/emergency" component={EmergencyPage} />
					<Route path="/directory" component={SearchDirectoryPage} />
					<Route path="/footer" component={Footer} />
					<Route path="/loginmodal" component={LoginModal} />
					<Route path="/registermodal" component={RegisterModal} />
					<Route path="/addresource" component={AddResource} />
					<Route path="/forms" component={Forms} />
					<PrivateRoute path="/homepage" component={Homepage} />
					<Route path="/registerpage" component={RegisterPage} />
					<Route path="/resetpassword" component={ResetPassword} />
					<Route path="/searchnavlinks" component={SearchNavLinks} />
					<PrivateRoute path="/userprofile" component={UserProfile} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
