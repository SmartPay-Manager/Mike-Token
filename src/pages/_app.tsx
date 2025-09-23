import 'tailwindcss/tailwind.css';

import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // Support per-page layouts
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;