// import { CacheProvider } from "@chakra-ui/next-js";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import GlobalHook from "@src/components/GlobalHook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { SWRConfig } from "swr";
import { Meta } from "./Meta";
import { Provider } from "react-redux";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Meta title="MikeToken" description="Green with Gain" />
      {/* <CacheProvider> */}
    </>
  );
};
export default Providers;
