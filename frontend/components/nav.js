import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div className="nav-container p-2 d-flex text-center">
        <ul class="nav">
          {
            categories.map((category) => {
              return (
                <li class="nav-item">
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="nav-link">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default Nav
