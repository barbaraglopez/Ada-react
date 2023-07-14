import { useState} from "react";
import {FaPhoneVolume} from "react-icons/fa6";
import { GiGhost} from "react-icons/gi";

//import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const [error, setError] = useState(false);

  return (
    <div className="">
      <nav class="bg-white border-gray-200 dark:bg-black w-screen">
        <div class="flex flex-wrap justify-between items-center mx-9 max-w-screen-xl p-4">
          <a href="#" class="flex items-center">
            <GiGhost className="text-blue-300 text-3xl mr-2" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Monster service
            </span>
          </a>
          <div class="flex items-center">
            <a
              href="tel:543624712603"
              class="mr-2 text-sm  text-gray-500 dark:text-white hover:underline flex items-center"
            >
              Call us and hire our services! (54) 3624712603
              <FaPhoneVolume className="mx-1 text-blue-300" />
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
                  href="http://go-60de6c82-be11-98e1-4d6c-c65a234eee95.disney.io/monstersinc/index.html"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="http://go-60de6c82-be11-98e1-4d6c-c65a234eee95.disney.io/monstersinc/characters.html#/0"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/barbara-lopez-it"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  SEO
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
