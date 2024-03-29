import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "highlight.js/styles/night-owl.css";
import stylesheet from "./tailwind.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import Navbar from "./components/Navbar";

// Then register the languages you need
hljs.registerLanguage("javascript", javascript);

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [
        { rel: "stylesheet", href: cssBundleHref },
        {
          rel: "stylesheet",
          href: styles,
        },
        { rel: "stylesheet", href: stylesheet },
      ]
    : []),
  {
    rel: "stylesheet",
    href: styles,
  },
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Welcome to Remix!</title>
      </head>
      <body
        className={
          "flex dark flex-col items-center align-middle justify-center"
        }
      >
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
