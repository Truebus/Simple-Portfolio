import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { LuLoader } from "react-icons/lu";

export const Blog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const result = await response.json();
                setData(result.posts);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-yellow-300">
            {loading ? (
                <h1 className="h-96 w-full text-8xl flex justify-center p-20 items-center"><LuLoader /></h1>
            ) : (
                <div>
                    <h1 className="text-blue-800 text-center font-bold text-5xl bg-sky-200 p-5">This is my Blog Page</h1>
                    <h4 className="text-sm font-semibold text-green-950 p-3">Here, You see all the Post Titles</h4>
                    <BiSolidRightArrowSquare className="text-4xl ml-6" />
                    <div className="flex flex-wrap justify-center p-4">
                        {data.map((x) => (
                            <div key={x.id} className="bg-orange-400 border-2 border-black h-auto w-60 text-center p-3
                                hover:bg-red-500 hover:text-yellow-300 shadow-white shadow-lg rounded-md transition duration-300 m-2">
                                <Link to={`/blog/${x.id}`}>
                                    <h3 className="font-bold text-lg">{x.title}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
