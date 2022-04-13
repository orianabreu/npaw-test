import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const MainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.light.main,
    fontSize: theme.typography.h1,
    width: '80%',
    fontWeight: 'bold'
}));

export const Paragraph = styled(Typography)(({ theme }) => ({
    color: theme.palette.light.main,
    fontSize: theme.typography.paragraph,
    width: '60%'
}));

export const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height: '220px',
    margin: '3rem 0'
})