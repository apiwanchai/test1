import React from "react";
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <nav >
        <Link href="/">
          <a>Home</a>
        </Link>
        {" | "}
        <Link href="/localstorage">
          <a>localstorage</a>
        </Link>
      </nav>
    </>
  );
}
