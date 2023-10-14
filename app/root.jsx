import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import {links as rootLinks} from './utils/links/root'

export let links = rootLinks

export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="../public/favIconTrevo.png"
                />
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