import React from 'react'

const Attributes = ({article}) => {
    const author = article.attributes.author.data.attributes.name;
    const category = article.attributes.category.data.attributes.name;
    const createdAt = new Date(article.attributes.createdAt).toDateString();

    return (
        <div className="article-attr d-flex justify-content-center text-decoration-none py-3">
            <div className="author px-3">
                Post by:
                <span className="attribute-val">
                    {
                        author ? author : `Anonymous`
                    }
                </span>
            </div>
            <div className="date-posted px-3">
                on:
                <span className="attribute-val">
                    {
                        createdAt ? createdAt : ``
                    }
                </span>
            </div>
            <div className="category-posted px-3">
                in:
                <span className="attribute-val">
                    {
                        category ? category : ``
                    }
                </span>
            </div>
        </div>
    )
}

export default Attributes;

