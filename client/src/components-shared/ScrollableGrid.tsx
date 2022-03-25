import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { HEADER_HEIGHT } from 'src/constants/common';

const ScrollableGrid = styled(Grid)({
  maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  justifyContent: 'center',
  overflow: 'auto',
});

export default ScrollableGrid;
