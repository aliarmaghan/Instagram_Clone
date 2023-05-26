import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';

const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/sign-up'));
const NotFound = lazy(() => import ('./pages/not-found'));
const Dashboard = lazy(() => import ('./pages/dashboard'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login/>} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </Router>

  )
}


