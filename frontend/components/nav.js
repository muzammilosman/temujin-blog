import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div className="nav-container justify-content-center p-2 d-flex text-center">
        <div className="nav">
          {
            categories.map((category) => {
              return (
                <div className="nav-item">
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="nav-link">{category.attributes.name}</a>
                  </Link>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Nav
