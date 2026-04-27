import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }) => {

    console.log(news)

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        src={news.author?.img}
                        alt="Shoes" width={300} height={300} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <Link href={`/news/${news._id}`}>
                            <button className="btn btn-primary">See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;