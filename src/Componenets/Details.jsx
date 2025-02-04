import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LuLoader } from "react-icons/lu";

export const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="h-80 w-full bg-yellow-300 text-center p-10">
            {loading ? (
                <h1 className="h-96 w-full text-8xl flex justify-center p-20 items-center">
                    <LuLoader />
                </h1>
            ) : (
                <>
                    <h1 className="font-bold text-3xl">This is Your Post Details Page:</h1>
                    <h1 className="bg-red-300 p-5 font-semibold hover:text-red-500">{post?.title}</h1>
                    <p className="hover:text-red-500">{post?.body}</p>
                </>
            )}
        </div>
    );
};
