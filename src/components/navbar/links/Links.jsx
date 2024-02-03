"use client";
import {useState} from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Register",
      url: "/register",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  const [open, Setopen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavLink key="admin" item={{title: "Admin", url: "/admin"}} />
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink key="login" item={{title: "Login", url: "/login"}} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => Setopen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
