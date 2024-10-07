import { useQuery } from "@tanstack/react-query";
import { readPosts } from "../services/service";
import { POST_QUERY_KEYS } from "../services/key";
import { Link } from "react-router-dom";

export default function ListPage() {
    const { data, isPending, error } = useQuery({
        queryKey: POST_QUERY_KEYS.READ_POSTS(),
        queryFn: readPosts,
    });

    if (isPending) return <div>Loading posts...</div>;
    if (error) return <div>Error loading posts</div>;

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data?.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/${post.id}`}>{post.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
