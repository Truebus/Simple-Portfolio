import { useState ,useEffect} from "react"
import { Link } from "react-router-dom";
import { BiSolidRightArrowSquare } from "react-icons/bi";
export const Blog=()=>{
    const[data,setData]=useState([]);
    console.log(data)
    useEffect(()=>{
        const fetchdata=async()=>{
            const data1=await fetch("https://dummyjson.com/post");
            const response=await data1.json();
            // console.log(response)
            setData(response.posts);
        }
        fetchdata();
    },[])
    return(
        <div className="bg-yellow-300">
            <div>
                <h1 className="text-blue-800 text-center font-bold text-5xl bg-sky-200 p-5">This is my Blog Page</h1>
                <h4 className="text-sm font-semibold text-green-950 p-3">Here, You see all the Post Titles</h4>
                <BiSolidRightArrowSquare className="text-4xl ml-6"/>
                {data.map((x)=>(
                    <div className="flex flex-wrap justify-center p-4">
                    <div key={x.id} className="bg-orange-400 border-2 border-black h-auto w-60 text-center p-3
                    hover:bg-red-500 hover:text-yellow-300 shadow-white shadow-lg rounded-md transistion duration-300">
                        <Link to={`/blog/${x.id}`}>
                        <h3 className="font-bold text-lg">{x.title}</h3>
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </div>
    )
}