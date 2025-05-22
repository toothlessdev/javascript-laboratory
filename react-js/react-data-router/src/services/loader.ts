import { LoaderFunctionArgs } from "react-router-dom";
import { queryClient } from "../configs/query";
import { POST_QUERY_KEYS } from "./key";
import { readPostById, readPosts } from "./service";

export const readPostsLoader = async () => {
    const queryKey = POST_QUERY_KEYS.READ_POSTS();

    await queryClient.fetchQuery({
        queryKey,
        queryFn: readPosts,
    });

    return queryClient.getQueryData(queryKey);
};

export const readPostByIdLoader = async ({ params }: LoaderFunctionArgs) => {
    const queryKey = POST_QUERY_KEYS.READ_POST_BY_ID(Number(params.id));

    await queryClient.fetchQuery({
        queryKey,
        queryFn: () => readPostById(Number(params.id)),
    });

    return queryClient.getQueryData(queryKey);
};
