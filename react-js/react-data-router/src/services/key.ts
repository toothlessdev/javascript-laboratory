export const POST_QUERY_KEYS = {
    POSTS: () => ["posts"],
    READ_POSTS: () => ["posts", {}],
    READ_POST_BY_ID: (id: number) => ["posts", { id }],
};
