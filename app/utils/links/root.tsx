import globalStyles from '../../styles/global.css'

import type { LinksFunction } from '@remix-run/server-runtime'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStyles }]
}