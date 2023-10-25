'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {

    const [search,setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`);
    }
  return (
    <form className="text-black w-50" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..."
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className="p-3 mr-2 text-xl text-black rounded-xl"/>
        <button className="p-2 border rounded-xl">
            🔎
        </button>
    </form>
  )
}