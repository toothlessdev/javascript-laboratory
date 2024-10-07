import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ProgressBar } from "./ProgressBar";

export const RootLayout = () => {
    return (
        <Fragment>
            <ProgressBar />
            <Outlet />
        </Fragment>
    );
};
