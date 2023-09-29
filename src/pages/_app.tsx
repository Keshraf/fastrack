import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  sideNav?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

/* import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
} */

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const sideNav = Component.sideNav;
  return (
    <MantineProvider>
      <main className={inter.variable}>
        {sideNav ? (
          <>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </main>
    </MantineProvider>
  );
}
