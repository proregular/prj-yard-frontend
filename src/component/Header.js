import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';




export default function Header(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <Box
            component="div"
            sx={{
                height: '44px',
                padding: '8px 24px',
                display: 'flex'
            }}
        >
        <IconButton variant="contained" aria-label="menuOpen">
            <MenuOpenIcon />
        </IconButton>
        <Box
            component="div"
            sx={{
                flexGrow: 1
            }}
        >
        </Box>
        <Box
            component="div"
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Avatar src="/broken-image.jpg" sx={{ width: 32, height: 32 }} />
            
            <Typography variant="h6" display="block" sx={{margin: '0 10px', fontSize: '0.875rem', fontWeight: 600}}>
                관리자
            </Typography>
        </Box>
        <IconButton variant="contained" aria-label="logout">
            <LogoutIcon />
        </IconButton>
            
        </Box>
    );
}