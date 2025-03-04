'use client';

import type { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';

function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default Providers;
