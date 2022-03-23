import { Theme } from '@material-ui/core';

declare module '@material-ui/styles' {
  interface DefaultTheme extends Theme {}
}

declare module '@material-ui/core/styles' {
  interface Theme extends DefaultTheme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends DefaultTheme {
    status?: {
      danger?: string;
    };
  }
}
