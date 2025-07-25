import React from 'react'

function Card({ item }) {
    return (
        <div>
            <div className="card bg-base-100 w-92 justify-between">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions ">
                        <div className="badge badge-outline hover:text-pink-500">{item.title}</div>
                        <div className="badge badge-outline">{item.price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
