import React from "react"
import Link from "next/link"
import NextImage from "./image"
import Attributes from "./attributes"

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <div className="text-decoration-none">
        <div className="py-4">
          <div className="">
            <h2 id="" className="text-center py-4 my-2">
              {article.attributes.title}
            </h2>
            {/* <p id="category" className="">
              {article.attributes.category.name}
            </p> */}
          </div>
          <Attributes article={article} />
          <div className="w-50 mx-auto">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="article-desc py-2 text-center">
            {article.attributes.description}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
