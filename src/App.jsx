import './App.scss';
// import 'mdb-react-ui-kit/dist/css/mdb.dark.min.css';
import Title from './components/title';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Room from './pages/HomePage';
import Conference from './pages/conferenceRoom';
import Lobby from './pages/lobbyRoom';
import Cabin from './pages/personalCabin';
import Office from './pages/officeRoom';

function App() {
	return (

			<Router>
				<Title/>
				<div>
					<Routes>
						<Route exact path="/" element={<Room/>}/>
						<Route exact path="/conference" element={<Conference/>}/>
						<Route exact path="/lobby" element={<Lobby/>}/>
						<Route exact path="/cabin" element={<Cabin/>}/>
						<Route exact path="/office" element={<Office/>}/>
					</Routes>
				</div>
			</Router>

		);
}

export default App;