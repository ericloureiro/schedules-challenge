import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { HEADER_HEIGHT } from 'src/constants/common';

const grey = '#282c34';

export const AppContainer = styled(Grid)`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: ${grey};
`;

export const AppHeader = styled.div`
  z-index: 1;
  display: flex;
  position: fixed;
  top: 0;
  height: ${HEADER_HEIGHT};
  background-color: white;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const AppBody = styled(Grid)`
  margin-top: ${HEADER_HEIGHT}px;
`;
