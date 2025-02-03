/* "use client"
import { default as NextLink } from 'next/link'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity/lib/sanity.client'
import { Button } from '../atoms/Button'
import { AnimatePresence, motion } from 'framer-motion'
import { AdvancedButton } from '../atoms/AdvancedButton'
import Icon from '../atoms/Icons'
import { stegaClean } from '@sanity/client/stega'
import { NAVIGATION_QUERY } from '~/sanity/lib/sanity.queries'
 */

/**
 *
 * @returns: Navigationen for hjemmesiden.
 * @example: <Navigation />
 * @alias: Navigation
 * @summary: Denne komponent bruges til at vise navigationen for hjemmesiden.
 * @version: 1.0.0
 * @property: [onClose]
 * @author: Kasper Buchholtz
 *
 **/

/* 
export default function Navigation({ onClose }) {
  const useNavigationData = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        let result = await client.fetch(NAVIGATION_QUERY);
        result = await stegaClean(result);
        setData(result);
      };
      fetchData();
    }, []);
    return data;
  };
  const data = useNavigationData();


  return (
    <>
      <motion.nav
        data-lenis-prevent="true"
        initial={{ x: '100%' }}
        transition={{ stiffness: 100 }}
        animate={{ x: 0 }}
        exit={{ x: '100%', opacity: 0 }}
        className="fixed z-[999] top-0 right-0 w-screen h-screen sm:w-[50vw] md:w-[50vw] lg:w-[33vw] overflow-auto bg-superego-light-light"
      >
        <ul className="h-full px-6 pb-6 space-y-6 overflow-auto md:px-24 lg:px-19 xl:px-16 sm:px-13 pt-44 sm:pt-32 md:pt-28 lg:pt-28">
          {data?.links?.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </motion.nav>
      <motion.button
        title="Luk menu"
        className="fixed z-[998] top-0 right-0 w-screen h-screen bg-superego-dark/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, stiffness: 100 }}
        onClick={onClose}
      />
    </>
  )
}


function MenuItem({ item }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <li className={`h-auto border-b border-dark text-medium `}>
      {item?.subLinks?.length > 0 ? (
        <>
          <AdvancedButton onClick={toggleSubmenu} className="relative flex items-start justify-between w-full px-0 py-0 pb-2 text-left " variant="none">
            {item.link.label}
            <Icon type={'chevronUp'} className={`size-6 transition-all transform fill-superego-dark ${isSubmenuOpen ? 'rotate-180' : 'rotate-0'}`} />
          </AdvancedButton>
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                {item.subLinks.map((subItem, index) => (
                  <SubMenuItem key={index} item={subItem} />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Button className='relative block w-full h-auto px-0 py-0 pb-2 text-left ' variant='none' link={item.link}>
          {item.link.label}
        </Button>
      )}
    </li>
  );
}


function SubMenuItem({ item }) {
  return (
    <li className='h-auto border-b last-of-type:border-b-0 border-dark last-of-type:mb-6'>
      <Button className='relative block w-full px-0 py-0 pb-2 text-left ' variant='none' link={item}>
        {item.label}
      </Button>
    </li>
  );
} */






  

  "use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = [
  { label: "About", href: "#" },
  {
    label: "Work",
    href: "#",
    subLinks: [
      {
        label: "Fictional",
        href: "/work/fictional"
      },
      {
        label: "Commercial",
        href: "/work/commercial"
      },
      {
        label: "Musical",
        href: "/work/musical"
      }
    ]
  },
  { label: "Contact", href: "#" },
];

const Navigation = ({ isOpen, handleClick }) => {
  const navRef = useRef(null);
  const navItemsRef = useRef(null);
  const buttonRef = useRef(null);
  const [openSubmenus, setOpenSubmenus] = useState({}); // Manage open submenus state

  useEffect(() => {
    if (isOpen) {
      // Animate the main navigation menu open
      gsap.set(navItemsRef.current.children, {
        opacity: 0,
        y: -50,
      });

      gsap.fromTo(
        navRef.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.7,
          ease: "power3.inOut",
          onStart: () => {
            gsap.set(navRef.current, { visibility: "visible" });
            gsap.fromTo(
              buttonRef.current,
              { opacity: 0, visibility: "hidden" },
              {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                visibility: "visible",
              }
            );
          },
          onComplete: () => {
            gsap.to(navItemsRef.current.children, {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.5,
              ease: "power3.inOut",
            });
          },
        }
      );
    } else {
      // Animate the main navigation menu close
      gsap.to(navItemsRef.current.children, {
        opacity: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Close all open submenus when main navigation closes
      Object.keys(openSubmenus).forEach((index) => {
        if (openSubmenus[index]) {
          const submenu = document.querySelectorAll(`.submenu-${index}`)[0];
          const submenuItems = submenu.children;

          gsap.to(submenuItems, {
            x: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power3.inOut",
            stagger: 0.1, // Stagger effect for closing
          });

          setTimeout(() => {
            // Ensure height is reset after animation
            gsap.set(submenu, { });
          }, 500); // Delay matching the animation duration
        }
      });

      gsap.to(navRef.current, {
        clipPath: "polygon(0% 0%, 0% 0%, 100% 100%, 100% 100%)",
        duration: 0.7,
        ease: "power3.inOut",
        delay: 0.5,
        onComplete: () => {
          gsap.set(navRef.current, { visibility: "hidden" });
        },
      });

      gsap.to(buttonRef.current, {
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        ease: "power3.inOut",
      });

      // Reset all open submenus state
      setOpenSubmenus({});
    }
  }, [isOpen]);

  // Handle submenu toggle with animation
  const toggleSubmenu = (index) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    const submenu = document.querySelectorAll(`.submenu-${index}`)[0];
    const submenuItems = submenu.children;

    if (!openSubmenus[index]) {
      // Open submenu: animate children with stagger
      gsap.fromTo(
        submenuItems,
        { x: -100, opacity: 0 }, // Initially off-screen
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.1, // Stagger effect for opening
        }
      );

      gsap.to(submenu, {
        opacity: 1, // Show submenu
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      // Close submenu: animate children with stagger
      gsap.to(submenuItems, {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.1, // Stagger effect for closing
      });

      gsap.to(submenu, {
        opacity: 0, // Hide submenu
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{ visibility: "hidden" }}
        className="fixed top-0 left-0 z-50 flex w-full h-full pt-20 font-serif bg-darks-900 nav se-grid"
      >
        <ul ref={navItemsRef} className="max-w-lg col-start-2 mt-auto mb-auto mr-auto h-fit space-y-19 -col-end-1">
          {navItems.map((item, index) => (
            <li key={item.label}>
              {item.subLinks ? (
                <>
                  {/* Clicking this button toggles the submenu */}
                    <button
                    className={`text-giant transition-colors  ${openSubmenus[index] ? "text-lights-0" : "text-shadow-0"}`}
                    onClick={() => toggleSubmenu(index)}
                    >
                    {item.label}
                    </button>
                    <ul
                    className={`submenu-${index} absolute overflow-hidden translate-x-1/2 -translate-y-1/2 -right-full top-1/2`}
                    style={{ opacity: 0 }}
                    >
                    {item.subLinks.map((subItem) => (
                      <li key={subItem.label}>
                      <a className="w-full text-lights-0 text-large" href={subItem.href}>
                        {subItem.label}
                      </a>
                      </li>
                    ))}
                    </ul>
                </>
              ) : (
                <a className="w-full text-giant text-shadow-0" href={item.href}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="absolute font-sans bottom-4 right-4 text-lights-400 text-[9px]">
          <a target="_blank" href="https://kasperbuchholtz.dk">Website by Kasperbuchholtz.dk</a>
        </div>
      </nav>
      <button 
        ref={buttonRef}
        style={{ visibility: "hidden" }}
        onClick={handleClick}
        className={`fixed z-40 w-full h-full bg-black/20 backdrop-blur-sm ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
    </>
  );
};

export default Navigation;
