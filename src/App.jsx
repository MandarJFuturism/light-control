import './App.scss';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'
import Home from './pages/HomePage';
import Conference from './pages/conferenceRoom';
import Lobby from './pages/lobbyRoom';
import Cabins from './pages/Cabins';
import Office from './pages/officeRoom';
import AddDevice from './components/addDevice';
import FAB from './components/fab';
// import Navbar from './components/Navbar';
import Devices from './pages/Devices';
import Room from './pages/room';
import AddRoom from './components/addRoom';
import Sidebar from './components/Sidebar';
import BlankPage from './components/blankPage';

function App() {
	return (
		<>
			<SnackbarProvider>
				<Router>
				<Sidebar/>
					<Routes>
						<Route exact path="/" element={<Home/>}/>
						<Route exact path="/Conference" element={<Conference/>}/>
						<Route exact path="/Lobby" element={<Lobby/>}/>
						<Route exact path="/Cabins" element={<Cabins/>}/>
						<Route exact path="/Office" element={<Office/>}/>
						<Route exact path="/addDevice" element={<AddDevice/>}/>
						<Route exact path="/editDevice" element={<Devices/>}/>
						<Route exact path="/room" element={<Room/>}/>
						<Route exact path="/addRoom" element={<AddRoom/>}/>
						<Route exact path="/blank" element={<BlankPage/>}/>
					</Routes>
				</Router>
				<div className='fab'><FAB/></div>
			</SnackbarProvider>
		</>
		);
}

export default App;