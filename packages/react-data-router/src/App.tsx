import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { queryClient } from "./configs/query";

import { readPostByIdLoader, readPostsLoader } from "./services/loader";
import { RootLayout } from "./components/RootLayout";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <Route path="/" element={<RootLayout />}>
                            <Route
                                path="/"
                                lazy={async () => ({ Component: (await import("./pages/ListPage")).default })}
                                loader={readPostsLoader}
                            />
                            <Route
                                path="/:id"
                                lazy={async () => ({ Component: (await import("./pages/DetailPage")).default })}
                                loader={readPostByIdLoader}
                            />
                        </Route>,
                    ),
                )}
            />
        </QueryClientProvider>
    );
}
