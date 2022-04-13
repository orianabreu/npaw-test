import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    marginTop: '20px'
}));