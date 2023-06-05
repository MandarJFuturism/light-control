import './App.scss';
// import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import Title from './components/title';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Room from './pages/HomePage';
import Conference from './pages/conferenceRoom';
import Lobby from './pages/lobbyRoom';
import Cabin from './pages/personalCabin';
import Office from './pages/officeRoom';
import Profiles from './components/ToggleSwitch';
import AddDevice from './components/addDevice';
import FAB from './components/fab';
import Titles from './components/Titles';

function App() {
	return (
		<>
			<Router>
				<Titles/>
				<div>
					<Routes>
						<Route exact path="/" element={<Room/>}/>
						<Route exact path="/conference" element={<Conference/>}/>
						<Route exact path="/lobby" element={<Lobby/>}/>
						<Route exact path="/cabin" element={<Cabin/>}/>
						<Route exact path="/office" element={<Office/>}/>
						<Route exact path="/profiles" element={<Profiles/>}/>
						<Route exact path="/addDevice" element={<AddDevice/>}/>
					</Routes>
				</div>
			</Router>
			<div className='fab'>
				<FAB/>
			</div>
		</>
		);
}

export default App;