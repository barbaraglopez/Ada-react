import { useState } from 'react'
import './Sidebar.css'
import { useNavigate } from "react-router-dom";
import {useAuth} from '../../context/useContext'

import { FaArrowLeftLong, FaUser } from "react-icons/fa6";
import {
    BsSearchHeart,
    BsFillHeartFill,
    BsFillMouse2Fill,
    BsArrowDownShort,
    BsCartFill,
    BsPersonXFill,
} from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { CgDarkMode } from "react-icons/cg";


function Sidebar() {
    const {logOut ,} = useAuth()
    const [open, setOpen] = useState(true)
    const [submenuOpen, setsubmenuOpen] = useState(false);
    const navigate = useNavigate();
    const [ logout, setlogout] = useState(false)

    const Menus = [
      {
        title: "Profile",
        icon: <FaUser className="text-blue-300" />,
        url: "/profile",
      },
      {
        title: "Cart",
        icon: <ImCart className="text-blue-300" />,
        url: "/cart",
      },
      {
        title: "Monsters",
        submenu: true,
        submenuItems: [{ title: "All our products", url: "/home" }],
      },
      {
        title: "Logout",
        icon: <BsPersonXFill className="text-blue-300" />,
        evento: true,
      },
      {
        title: "Darkmode",
        icon: <CgDarkMode className="text-blue-300" />,
        evento: false,
      },
    ];

    const handleEventsSidebar = (parametro1, parametro2) => {
      if (parametro1) {
        navigate(parametro1);
      } else if (parametro2) {
        setlogout(true);
      } else {
        darkmode();
      }
    };

//funcion para cerrar sesion
     const handleLogOut= async ()=>{
    try {
      await logOut();  
    } catch (error) {
      setError(error.message)
    }
  }

//funcion para darkmode
const darkmode=()=>{
    console.log('click')
}


    return (
      <div
        className={`bg-neutral-950 text-white "flex p-5 pt-8 h-screen ${
          open ? "w-72" : "w-20"
        } relative duration-300`}
      >
        <FaArrowLeftLong
          className={`bg-white text-violet-800 text-2xl p-1 rounded-full absolute top-9 -right-3 border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsFillHeartFill
            className={` text-blue-300 text-2xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <p
            className={`text-white text-1xl origin-left duration-300 ${
              !open && "scale-0"
            }`}
          >
            Welcome!
          </p>
        </div>
        <div
          className={`flex items-center rounded-md bg-white ${
            !open ? "px-4" : "px-2.5"
          } mt-6`}
        >
          <BsSearchHeart
            className={`text-black text-lg block floart-left cursor-pointer${
              open && "mr-2"
            }`}
          />
          <input
            type={"search"}
            placeholder=" Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 `}
              >
                <span
                  className="text-2xl block"
                  onClick={() => handleEventsSidebar(menu.url, menu.evento)}
                >
                  {menu.icon ? (
                    menu.icon
                  ) : (
                    <BsFillMouse2Fill className="text-blue-300"/>
                  )}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                  onClick={() => handleEventsSidebar(menu.url, menu.evento)}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsArrowDownShort
                    className={`text-2xl bg-white rounded-full text-black  ${
                      submenuOpen && "rotate-180"
                    }`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        handleEventsSidebar(
                          submenuItems.url,
                          submenuItems.evento
                        )
                      }
                      className={`text-gray-300 text-sm hover:bg-gray-700 flex items-center gap-x-4 cursor-pointer p-2 px-5`}
                    >
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
        {logout ? (
          <div
            className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 ${
              !open && "hidden"
            }  text-center flex flex-col mt-5`}
          >
            Are you sure you want to log out?
            <div className="w-full">
              <button
                className="bg-green-100 text-black p-1 m-1 border-green-400 border rounded px-2 cursor-pointer"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-100 text-black p-1 m-1 border-red-400 border rounded px-2 cursor-pointer text-red-700"
                onClick={() => {
                  setlogout(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
}

export default Sidebar