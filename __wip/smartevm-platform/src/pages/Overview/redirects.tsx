// Redirects to swap but only replace the pathname
import { Navigate } from 'react-router-dom'

export function RedirectPathToSwapOnly({ location }) {
  return <Navigate to={{ ...location, pathname: '/overview' }} />
}
