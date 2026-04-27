import { getNewsDetailsId } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {

    const { id } = await params

    const news = await getNewsDetailsId(id)
    console.log(news)

    return (
        <div>
            <h2>News Details Page</h2>
            {
                news.data.map(n => {
                    return <div key={n._id}>
                        {n.title}
                        <Link href={`/category/${n.category_id}`}>
                            <button className='btn'>See related News</button>
                        </Link>
                    </div>
                })
            }
        </div>
    );
};

export default NewsDetailsPage;