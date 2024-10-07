import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../services/service";
import { POST_QUERY_KEYS } from "../services/key";

import { PostCard } from "../components/PostCard";

export default function ListPage() {
    const { data, isPending, error } = useQuery({
        queryKey: POST_QUERY_KEYS.READ_POSTS(),
        queryFn: readPosts,
    });

    if (isPending) return <div>Loading posts...</div>;
    if (error) return <div>Error loading posts</div>;

    return (
        <div>
            <ul className="flex flex-col gap-4">
                {data?.map((post) => {
                    return <PostCard id={post.id} title={post.title} />;
                })}
            </ul>
        </div>
    );
}
