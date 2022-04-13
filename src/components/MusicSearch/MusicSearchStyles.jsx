import { alpha, styled } from '@mui/material/styles';
import Fab from "@mui/material/Fab";

export const Input = styled('input')(({ theme }) => ({
    width: '30%',
    outline: 'none',
    borderRadius: '25px',
    border: `1px solid ${theme.palette.light.main}`,
    padding: '1rem 2rem',
    color: theme.palette.light.main,
    fontSize: theme.typography.paragraph,
    background: 'transparent',
    '&:focus': {
      boxShadow: `${alpha(theme.palette.light.main, 0.25)} 0 0 0 0.2rem`,
      border: `2px solid ${theme.palette.light.main}`,
    },
    '&:hover': {
      borderColor: theme.palette.dark.main,
    }
}));

export const IconContainer = styled(Fab)(({ theme }) => ({
    backgroundColor: theme.palette.light.main,
    marginTop: '50px'
}));