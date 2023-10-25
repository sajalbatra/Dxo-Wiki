import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-between items-center border p-5 mb-5 md:flex-row">
        <h1 className="text-3xl">
            <Link href='/'>DxO Wiki</Link>
        </h1>
        <Search/>
    </nav>
  )
}
