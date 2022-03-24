import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const ScrollableGrid = styled(Grid)`
  max-height: 100vh;
  overflow: auto;
  padding: 4px;
`;

export default ScrollableGrid;
