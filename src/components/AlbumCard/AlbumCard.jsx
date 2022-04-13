import React from 'react'

export default function AlbumCard({ artwork, artist, albumName}) {
  return (
    <div>
        <img src={artwork} alt={albumName} />
        <h2>Artist: {artist}</h2>
        <p>Album: {albumName}</p>
    </div>
  )
}
