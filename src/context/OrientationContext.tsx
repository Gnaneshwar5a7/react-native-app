import React, {createContext} from 'react';

import useOrientation from '../hooks/useOrientation';

interface ContextProviderProps {
  children: JSX.Element;
}

export const OrientationContext = createContext<'LANDSCAPE' | 'PORTRAIT'>(
  'PORTRAIT',
);

export default function OrientationContextProvider(
  props: ContextProviderProps,
) {
  const orientation = useOrientation();

  return (
    <OrientationContext.Provider
      value={orientation}
      children={props.children}
    />
  );
}
