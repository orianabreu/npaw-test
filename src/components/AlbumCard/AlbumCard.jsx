import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { CardImage, CardContainer } from './AlbumCardStyles';

export default function AlbumCard({ artwork, artist, albumName}) {
  return (
    <CardContainer>
      <CardActionArea>
        <CardImage
          component="img"
          height="140"
          width="140"
          image={artwork}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {artist}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Album: {albumName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContainer>
  )
}
