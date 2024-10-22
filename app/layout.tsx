import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider, Box } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Oasis hackthon',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Box
            h="100vh"
            style={{
            background: 'linear-gradient(187deg, rgba(72,133,219,1) 10%, rgba(211,78,78,1) 91%)',
          }}>
              {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
