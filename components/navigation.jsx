"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();
    console.log(path);
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "check" : ""}
                </li>
                <li>
                    <Link href="/about-us">AboutUs</Link> {path === "/about-us" ? "check" : ""}
                </li>
            </ul>
        </nav>
    );
}