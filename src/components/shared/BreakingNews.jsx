import { tr } from 'date-fns/locale';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

    const latestNews = [
        {
            id: 1,
            title: "AI tools are transforming web development in 2026"
        },
        {
            id: 2,
            title: "Remote jobs in tech continue to rise globally"
        },
        {
            id: 3,
            title: "JavaScript frameworks evolve with faster performance trends"
        }
    ];


    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 px-2 py-4 mx-auto'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {latestNews.map(n => {
                    return <span key={n.id}>{n.title}</span>
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;