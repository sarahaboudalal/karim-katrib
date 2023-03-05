import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ open = false, setOpen }) {
  return (
    <nav className="bg-blackish px-4 sm:px-12 md:py-6 py-9 fixed w-full z-20 top-0 left-0 shadow-md ">
      <div className="container flex flex-wrap md:flex-row flex-col md:justify-center justify-start md:items-center items-start mx-auto">
        <div className="flex items-center">
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className=""
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-4xl text-whitish absolute right-8 top-5 cursor-pointer md:hidden z-10" />
            ) : (
              <FaBars className="text-4xl text-whitish absolute right-8 top-5 cursor-pointer md:hidden" />
            )}
          </button>
          <div
            className={[
              'items-center justify-between md:flex md:w-auto md:order-1',
              open ? 'flex' : 'hidden',
            ].join(' ')}
          >
            <ul
              className={[
                'text-beige font-bold md:text-xl bg-blackish text-2xl md:flex flex-col md:flex-row md:w-auto md:h-auto gap-x-5 h-screen w-screen  justify-center items-center ',
                open
                  ? 'md:shadow-none flex shadow-xl md:relative absolute top-0 left-0 md:p-0 px-5 pt-8 '
                  : 'left-[-700px] top-[96px]',
              ].join(' ')}
            >
              <li className="md:py-0 py-2">
                <Link
                  onClick={() => setOpen(false)}
                  to="header"
                  spy={true}
                  offset={-250}
                  smooth={true}
                  delay={50}
                  duration={800}
                  className="cursor-pointer hover:text-whitish duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="md:py-0 py-2">
                <Link
                  to="about"
                  offset={-50}
                  onClick={() => setOpen(false)}
                  spy={true}
                  smooth={true}
                  delay={50}
                  duration={800}
                  className="cursor-pointer hover:text-whitish duration-300"
                >
                  About
                </Link>
              </li>
              <li className="md:py-0 py-2">
                <Link
                  to="parameters"
                  onClick={() => setOpen(false)}
                  offset={-100}
                  spy={true}
                  smooth={true}
                  delay={50}
                  duration={800}
                  className="cursor-pointer hover:text-whitish duration-300"
                >
                  Parameters
                </Link>
              </li>
              <li className="md:py-0 py-2">
                <Link
                  to="gallery"
                  offset={-100}
                  onClick={() => setOpen(false)}
                  spy={true}
                  smooth={true}
                  delay={50}
                  duration={800}
                  className="cursor-pointer hover:text-whitish duration-300"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
