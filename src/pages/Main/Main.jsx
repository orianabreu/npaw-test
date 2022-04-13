import React from 'react';
import Header from '../../components/Header/Header';
import MusicSearch from '../../components/MusicSearch/MusicSearch';
import { SectionContent } from './MainStyles';

export default function Main() {
  return (
    <SectionContent>
        <Header />
        <MusicSearch />
    </SectionContent>
  )
}
