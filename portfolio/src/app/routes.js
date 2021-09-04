import { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import Loading from "../features/layout/Loading";
import Layout from "../features/layout/Layout";
import { ROUTES } from "./constants";

const HomePage = lazy(() => import("../features/home/Home"))
const AboutPage = lazy(() => import("../features/about/About"))

const Router = () => {
    return (
        <Layout>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={HomePage} />
                    <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default Router;