import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

const NavLink = ({ to, label }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleLocationChange = () => {
      setIsActive(window.location.pathname === to)
    }

    handleLocationChange()
    window.addEventListener("popstate", handleLocationChange)

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
    }
  }, [to])


  return (
    <Link to={to} className={`${isActive ? "active" : ""}`}>
      {label}
    </Link>
  )
}

export default NavLink;