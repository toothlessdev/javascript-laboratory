import { useQuery } from "@tanstack/react-query";
import { POST_QUERY_KEYS } from "../services/key";
import { useParams } from "react-router-dom";
import { readPostById } from "../services/service";

export default function DetailPage() {
    const { id } = useParams();

    const { data, isPending, error } = useQuery({
        queryKey: POST_QUERY_KEYS.READ_POST_BY_ID(Number(id)),
        queryFn: () => readPostById(Number(id)),
    });

    if (isPending) return <div>Loading posts...</div>;
    if (error) return <div>Error loading posts</div>;

    return <div className="text-2xl">{data.body}</div>;
}
