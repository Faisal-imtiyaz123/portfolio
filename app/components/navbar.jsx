// @flow strict
"use client"
import Link from "next/link";


function Navbar() {

  const navLinks =[
    {
      name:"Education",
      link:"/#education",
    },
    {
      name:"Skills",
      link:"/#skills",
    },
    {
      name:"Experience",
      link:"/#experience",
    },
   
    {
      name:"Projects",
      link:"/#projects",
    },
  ]
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Faisal Imtiyaz
          </Link>
        </div>

        <ul  className="flex gap-8 ">
          {navLinks.map((navLink, index) => 
              <Link className="tracking-widest rounded-full  p-2 px-3 text-sm hover:bg-pink-500" key={index} href={navLink.link}>
                  {navLink.name}
              </Link>
          )
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;