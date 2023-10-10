import { Navigate, Outlet } from 'react-router'

interface IGuardedRoute {
  isRouteAccessible: boolean
  redirectRoute: string
}
const GuardedRoute = ({ isRouteAccessible, redirectRoute }: IGuardedRoute) => {
  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GuardedRoute
