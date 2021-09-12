import { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import Loading from "../features/layout/Loading";
import Layout from "../features/layout/Layout";
import { ROUTES } from "./static/constants";

const AboutPage = lazy(() => import("../features/about/About"))
const ContactsPage = lazy(() => import("../features/contacts/Contacts"))

const Router = () => {
    return (
        <Layout>
            <Switch>
                <Suspense fallback={<Loading />}>
                    <Route exact path={ROUTES.ABOUT} component={AboutPage} />
                    <Route exact path={ROUTES.CONTACTS} component={ContactsPage} />
                </Suspense>
            </Switch>
        </Layout>
    )
}

export default Router;