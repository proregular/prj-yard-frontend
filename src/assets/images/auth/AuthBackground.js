// material-ui
import { Box } from '@mui/material';
import img from './namoImgView.jpg';
import './AuthBackground.css'

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  return (
    <Box sx={{ position: 'absolute', width:"100%", height:"calc(100% - 7px)", filter: 'blur(2px)', zIndex: -1, top: 0 }}>
      <img className='background' src={img} width="100%" height="100%" alt="background"/>
      
    </Box>
  );
};

export default AuthBackground;
