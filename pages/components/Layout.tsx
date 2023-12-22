import React, { useEffect, useState } from "react";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menu, setMenu] = useState(false);
  const [hoverMenuItem, setHoverMenuItem] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    const header = document.querySelector(".header-content");

    const scrollEvent = () => {
      if (window.scrollY > 150) {
        return header?.classList.add("bg-black");
      }

      return header?.classList.remove("bg-black");
    };
    // Attach the scroll event listener to the window
    window.addEventListener("scroll", scrollEvent);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body')
    if (menu) {
      controls.start("visible");
      body?.classList.add('overflow-hidden')
    } else {
      controls.start("hidden");
      body?.classList.remove('overflow-hidden')
    }
  }, [menu]);

  const menuBgItems = [
    // {
    //     title: 'Home',
    //     imgUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    // },
    {
      title: "About Us",
      imgUrl:
        "https://images.pexels.com/photos/4906407/pexels-photo-4906407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Our Rooms",
      imgUrl:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Restaurant",
      imgUrl:
        "https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Spa & Wellness",
      imgUrl:
        "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      <motion.div
        className="bg-black h-screen z-[999] fixed w-full"
        variants={{
          hidden: { opacity: 0, display: "none", scale: 0.6 },
          visible: { opacity: 1, display: "block", scale: 1 },
        }}
        initial={"hidden"}
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        {menuBgItems.map((item, index) => (
          <img
          key={index}
            className={`h-full w-full absolute ease duration-700 brightness-50 object-cover
                 ${
                   hoverMenuItem === item.title
                     ? "scale-[1] opacity-1"
                     : "scale-[1.05] opacity-0"
                 }`}
            src={item.imgUrl}
            alt=""
          />
        ))}

        <Container className="relative z-20">
          <header className="flex justify-between items-center">
            <MdClose onClick={() => setMenu(false)} size={32} />

            <img
              src="/assets/eden hotel.png"
              alt="company logo"
              className="h-20 object-cover eden-logo"
            />
          </header>
          <ul className="flex w-full flex-col cursor-pointer my-5">
            {menuBgItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoverMenuItem(item.title)}
                onMouseLeave={() => setHoverMenuItem("")}
                className="ibarra text-[3rem] md:text-[3.5rem] italic"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </Container>
      </motion.div>

      <header className="fixed top-0 z-50 w-full lg:pt-5 lg:px-5">
        <Container className="container mx-auto header-content grid grid-cols-2 md:grid-cols-3 ease-in-out duration-200  p-2">
          <nav className="justify-self-end self-center order-last md:order-first md:justify-self-start">
            <button
              onClick={() => setMenu(true)}
              className="flex gap-4 text-sm items-center"
            >
              <GiHamburgerMenu size={20} />
              <span className="hidden md:inline">MENU</span>
            </button>
          </nav>

          <div className="flex md:justify-center">
            <img
              src="/assets/eden hotel.png"
              alt="company logo"
              className="h-20 object-cover eden-logo"
            />
          </div>

          <Link
            href="/"
            className="justify-self-end self-center hidden md:inline text-sm"
          >
            BOOK YOUR STAY
          </Link>
        </Container>
      </header>

      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
