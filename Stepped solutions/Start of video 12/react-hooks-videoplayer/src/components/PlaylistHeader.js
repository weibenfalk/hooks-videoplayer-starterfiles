import React from 'react';
import StyledPlaylistHeader from './styles/StyledPlaylistHeader';
import StyledJourney from './styles/StyledJourney';

const PlaylistHeader = ({ active, total }) => (
  <StyledPlaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.num} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

export default PlaylistHeader;