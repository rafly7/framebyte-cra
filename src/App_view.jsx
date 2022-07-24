import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import ListRoutes from './utils/routes'

export function AppView() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Routes>
      {ListRoutes.map((route, index) => {
        return(
          <Route
            key={index}
            path={route.path}
            exact={true}
            element={<route.main/>}
          />
        )
      })}
    </Routes>
  )
}