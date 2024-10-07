import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import { queryClient } from "./configs/query";
import ListPage from "./pages/ListPage";

import DetailPage from "./pages/DetailPage";

import { readPostByIdLoader, readPostsLoader } from "./services/loader";
import { RootLayout } from "./components/RootLayout";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider
                router={createBrowserRouter(
                    createRoutesFromElements(
                        <Route path="/" element={<RootLayout />}>
                            <Route path="/" element={<ListPage />} loader={readPostsLoader} />
                            <Route path="/:id" element={<DetailPage />} loader={readPostByIdLoader} />
                        </Route>,
                    ),
                )}
            />
        </QueryClientProvider>
    );
}
