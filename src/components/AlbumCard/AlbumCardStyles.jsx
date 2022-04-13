import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

export const CardContainer = styled(Card)({
    width: 'fit-parent',
})

export const CardImage = styled(CardMedia)({
    width: '100%',
    height: '450px',
    backgroundSize: 'cover'
})
