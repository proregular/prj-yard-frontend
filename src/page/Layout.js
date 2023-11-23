import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { mainListItems, secondaryListItems } from '../component/listItems';
import Chart from '../component/Chart';
import Deposits from '../component/Deposits';
import Orders from '../component/Orders';
import LeftNav from '../component/LeftNav';
import Header from '../component/Header';
import TmpContent from './TmpContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';


const defaultTheme = createTheme({
    typography: {
        fontFamily: '"Public Sans", sans-serif'
    }
});

export default function Dashboard(props) {
    return(
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', height: '100vh'}}>
                <Box
                    component="div"
                    sx={{
                        width: '260px',
                        height: '100vh',
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRight: "1px solid rgb(240, 240, 240)"
                    }}
                >
                    <Box component="div" sx={{
                        height: '44px',
                        padding: '8px'
                    }}>
                        이미지
                    </Box>
                    <LeftNav></LeftNav>
                </Box>
                <Box
                    component="div"
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Header></Header>
                    <Box
                        component="div"
                        sx={{
                            backgroundColor: '#fafafb',
                            flexGrow: 1,
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: '0px'
                        }}
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
                        <TmpContent></TmpContent>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}