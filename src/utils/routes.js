import { Home, Auth } from "../pages";
import NotFoundError from "../pages/not_found_error";

const Routes = [
  {
    path: '/',
    main: () => <Home/>
  },
  {
    path: '/auth/signin',
    main: () => <Auth/>
  },
  {
    path: '*',
    main: () => <NotFoundError/>
  }
]

export default Routes