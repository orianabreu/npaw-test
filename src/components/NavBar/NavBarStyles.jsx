import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.light.main,
}));

export const Nav = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.dark.main,
  position: 'static',
}));
