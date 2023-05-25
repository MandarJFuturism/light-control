import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Divider, ThemeProvider, createTheme, Tooltip, } from '@mui/material';
import { HomeSharp } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const settings = ['Profile','Logout'];
const NavUnlisted = styled.ul`


`;

function Title() {
	const [, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);


	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: "#424242",
					color:"#f1f1f1"
					}
				}
			},
		}
	});

	return (
		<ThemeProvider theme={theme}>
		<AppBar position="static" color='primary' enableColorOnDark>
			<Container maxWidth="x2">
				<Toolbar disableGutters>
					<HomeSharp sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						color='#f1f1f1'
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 1000,
							letterSpacing: '.3rem',
							textDecoration: 'none',
						}}
					>
						Dashboard
					</Typography>

{/* Appbar sub items */}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Divider orientation="vertical" variant="middle" flexItem />
						<NavLink style={{textDecoration: 'none'}} to="/conference" className="link">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: '#f1f1f1', display: 'block', fontWeight: 700 }}
							>
								<span>Conference Room</span>
							</Button>
						</NavLink>
						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/lobby" className="link">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: '#f1f1f1', display: 'block', fontWeight: 700 }}
							>
								<span>Lobby</span>
							</Button>
						</NavLink>

						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/cabin" className="link">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: '#f1f1f1', display: 'block', fontWeight: 700 }}
							>
								<span>Cabin Room</span>
							</Button>
						</NavLink>

						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/office" className="link">
							<Button
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: '#f1f1f1', display: 'block', fontWeight: 700 }}
							>
								<span>Office Room</span>
							</Button>
						</NavLink>
						<Divider orientation="vertical" variant="middle" flexItem />
					</Box>

{/* Profile  */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar sx={{backgroundColor:'#424242'}}/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px',}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
		</ThemeProvider>
	);
}
export default Title;