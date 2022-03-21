import React from 'react';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { QueryDataProvider } from 'src/hooks/useQueryData';
import { WithChildren } from 'src/types/utils';

const wrapper = ({ children }: WithChildren) => <QueryDataProvider>{children}</QueryDataProvider>;

const customRender = (ui: ReactElement) => render(ui, { wrapper });

const customRenderHook = <P, R>(customHook: (props: P) => R) => renderHook<P, R>(customHook, { wrapper });

// re-exports everything from @testing-library
export * from '@testing-library/react';

// override default render and export
export { customRender as render, customRenderHook as renderHook };
