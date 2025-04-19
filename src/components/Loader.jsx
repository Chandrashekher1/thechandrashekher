import * as React from 'react';

import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';

export default function CircularProgressVariants() {
  return (
    <Stack
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        backgroundColor: 'black',
        fontSize: 18,
        padding: 2,
        width: '100%',
      }}
    >
      <LinearProgress color="warning" variant="soft" sx={{ width: '50%' }} />
    </Stack>
  );
}
