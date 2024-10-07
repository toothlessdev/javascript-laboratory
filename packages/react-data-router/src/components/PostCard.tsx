import { useNavigate } from "react-router-dom";
import { PostData } from "../services/types";

export const PostCard = (props: Omit<PostData, "body" | "userId">) => {
    const navigate = useNavigate();

    return (
        <div className="flex-shrink-0 w-[500px] mx-auto bg-white border border-gray-300 rounded-lg overflow-hidden p-4">
            <div>
                <h3 className="text-xl mb-2 text-ellipsis overflow-hidden whitespace-nowrap">{props.title}</h3>
            </div>
            <div className="text-right">
                <button
                    onClick={() => navigate("/" + props.id)}
                    className="border bg-blue-400 text-white font-bold px-4 py-2 rounded"
                >
                    더보기
                </button>
            </div>
        </div>
    );
};
