import restClient from "@/api-client/restClient";
import EmptyLayout from "@/components/layout/empty";
import { AppRootProps } from "@/models";
import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import "tippy.js/dist/tippy.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { theme, createEmotionCache } from "@/utils";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const progress = new ProgressBar({
  size: 2,
  color: "#3b82f6",
  className: "bar-of-progress",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppRootProps) {
  const RenderLayout = Component.Layout ?? EmptyLayout;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) => restClient.get(url),
            shouldRetryOnError: false,
          }}
        >
          <RenderLayout>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </RenderLayout>
          <ToastContainer />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
