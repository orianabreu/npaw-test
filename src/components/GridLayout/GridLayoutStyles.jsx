import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(({ showGrid }) => ({
    flexGrow: 1,
    marginTop: '50px',
    width: showGrid ? '100%' : '40%'
}));