import { useState} from "react";
import {FaPhoneVolume} from "react-icons/fa6";

//import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const [error, setError] = useState(false);

  return (
    <div className="">
      <nav class="bg-white border-gray-200 dark:bg-black w-screen">
        <div class="flex flex-wrap justify-between items-center mx-9 max-w-screen-xl p-4">
          <a href="#" class="flex items-center">
            <img
              src="../../../img/LogoSample_ByTailorBrands.jpg"
              class="h-14 rounded-xl mr-3"
              alt="Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Funny SetUp
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="tel:543624712603"
              class="mr-2 text-sm  text-gray-500 dark:text-white hover:underline flex items-center"
            >
              (54) 3624712603
              <FaPhoneVolume className="mx-1 text-violet-700" />
            </a>
            <a
              href="#"
              class="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
