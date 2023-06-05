import * as React from 'react';
import { useState, useStyles } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Divider, ThemeProvider, createTheme, Tooltip, } from '@mui/material';
import { HomeSharp } from '@mui/icons-material';

function Title() {

const theme = createTheme({
	components: {
		MuiAppBar: {
			styleOverrides: {
				colorPrimary: {
					backgroundColor: "#424242",
					color:"#ff6052",
					fontFamily:'inherit'
					}
				}
			},
		MuiButton: {
			styleOverrides: {
				root: {
					color:"#FAF9F6",
					borderRadius:"0px",
					"&:hover": {
						backgroundColor:"#1565C0",
						},
					"&:active": {
						color:"#424242",
						backgroundColor:'ffa69e'
						}
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
						noWrap
						component="a"
						color='#c2c2c2'
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontWeight: 900,
							fontSize:30,
							letterSpacing: '.1rem',
							textDecoration: 'none',
						}}>
						*Title*
					</Typography>

{/* Appbar sub items */}
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					<Divider orientation="vertical" variant="middle" flexItem />
						<NavLink style={{textDecoration: 'none'}} to="/conference" className="link">
							<Button

								sx={{ my: 2, color: '#c2c2c2', display: 'block', fontWeight: 700 }}
							>
								<span>Conference Room</span>
							</Button>
						</NavLink>
						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/lobby" className="link">
							<Button
								sx={{ my: 2, color: '#c2c2c2', display: 'block', fontWeight: 700 }}
							>
								<span>Lobby</span>
							</Button>
						</NavLink>

						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/cabin" className="link">
							<Button
								sx={{ my: 2, color: '#c2c2c2', display: 'block', fontWeight: 700 }}
							>
								<span>Cabin Room</span>
							</Button>
						</NavLink>

						<Divider orientation="vertical" variant="middle" flexItem />

						<NavLink style={{textDecoration: 'none'}} to="/office" className="link">
							<Button
								sx={{ my: 2, color: '#c2c2c2', display: 'block', fontWeight: 700 }}
							>
								<span>Office Room</span>
							</Button>
						</NavLink>
						<Divider orientation="vertical" variant="middle" flexItem />

						<Divider orientation="vertical" variant="middle" flexItem />

					</Box>

				</Toolbar>
			</Container>
		</AppBar>
		</ThemeProvider>
	);
}
export default Title;