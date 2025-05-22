import { PostData } from "./types";

export const readPosts = async () => {
    const request = async (): Promise<PostData[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
    };

    return request();
};

export const readPostById = async (id: number) => {
    const request = async (): Promise<PostData> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
    };

    return request();
};
