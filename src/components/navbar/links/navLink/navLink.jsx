"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import PropTypes from "prop-types";
import {usePathname} from "next/navigation";

const NavLink = ({item, key}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.url}
      className={`${styles.container} ${
        pathName === item.url && styles.active
      }`}
      key={key}
    >
      {item.title}
    </Link>
  );
};

NavLink.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.string.isRequired,
};

export default NavLink;
