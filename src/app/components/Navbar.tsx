"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/util";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navbar({ className }: { className?: string }) {
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [active, setActive] = useState<string | null>(null);
  const token=localStorage.getItem("token");
  const router=useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token)
    setIsAuthenticated(true);
    else setIsAuthenticated(false);
    // Convert token existence to boolean
  }, []);
  const handlesignout=(()=>{
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push('/');
  })
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <Link href="/">
  <MenuItem setActive={setActive} active={active} item="Home">
    <div className="flex flex-col space-y-4 text-sm">
    </div>
  </MenuItem>
</Link>
      <Link href="/user">
  <MenuItem setActive={setActive} active={active} item="Services">
    <div className="flex flex-col space-y-4 text-sm">
    </div>
  </MenuItem>
</Link>
{/* <SignedOut> */}
        
        {
          isAuthenticated ? (<Link href="/" onClick={handlesignout} > <MenuItem setActive={setActive} active={active} item="Sign out">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              
            </div>
          </MenuItem>
          </Link>):(<div className=" flex gap-5" >
            <Link href="/signin" > <MenuItem setActive={setActive} active={active} item="Sign in">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            
          </div>
        </MenuItem>
        </Link>
        {/* </SignedOut> */}
        {/* <SignedIn> */}
        <Link href="/signup" > <MenuItem setActive={setActive} active={active} item="Sign Up">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            
          </div>
        </MenuItem>
        </Link>
            </div>)
        }



        {/* <UserButton></UserButton>
        </SignedIn> */}
      </Menu>
    </div>
  );
}
