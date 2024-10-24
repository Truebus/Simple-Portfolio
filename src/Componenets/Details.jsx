import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export const BlogPost=()=>{
    const {id}=useParams();
    const[post,setPost]=useState({});
    useEffect(()=>{
        const fetchdata=async()=>{
            const data=await fetch(`https://dummyjson.com/post/${id}`);
            const response=await data.json();
            setPost(response)
        }
        fetchdata()
    },[id])
    return(
        <div className="h-80 w-full bg-yellow-300 text-center p-10">
            <h1 className="font-bold text-3xl">This is Your Post Details Page:-</h1>
            <h1 className="bg-red-300 p-5 font-semibold hover:text-red-500">{post?.title}</h1>
            <p className="hover:text-red-500">{post?.body}</p>
        </div>
    )
}