import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
  } from '@remix-run/react';
  import { links as rootLinks } from './utils/links/root';
import React from 'react';
import type { MetaFunction } from "@remix-run/node";

  export let links = rootLinks;
  
  export const meta: MetaFunction = () => ([
    {
      title: "Boa sorte",
      viewport: "width=device-width,initial-scale=1",
    }
  ]);
  
  export default function App() {
    return (
      <html>
        <head>
          <title>TEste</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
    