import '@helpers/translate';

import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/global';
import { theme } from '@styles/themes';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress
        color="#2299DD"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        options={{ showSpinner: false }}
      />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
