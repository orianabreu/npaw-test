import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const FooterComp = styled('footer')({
    minHeight: '50px',
    textAlign: 'center'
});

export const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.light.main
}));