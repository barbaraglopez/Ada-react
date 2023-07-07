import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa6";;

const Footer = () => {

    return (
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-gray-600">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Barbara Lopez™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/in/barbara-lopez-it"
                class="mr-4 hover:underline md:mr-6 flex items-center"
              >
                Linkedin
                <FaLinkedin className="mx-1 text-violet-700 text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/barbaraglopez"
                class="mr-4 hover:underline md:mr-6 flex items-center"
              >
                Github
                <FaGithub className="mx-1 text-violet-700 text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;
