import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';

export default function CircularProgressVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap', backgroundColor:'black', fontSize:18 }}>
      {/* <CircularProgress variant="solid" /> */}
      {/* <CircularProgress variant="soft" /> */}
      <CircularProgress variant="outlined" sx={{ '--CircularProgress-progressColor': 'yellow' }}/>
      {/* <CircularProgress variant="plain" sx={{ '--CircularProgress-progressColor': 'yellow' }}/> */}
    </Box>
  );
}
