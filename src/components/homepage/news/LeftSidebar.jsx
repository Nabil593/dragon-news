import { ca } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ getData, activeId }) => {
    return (
        <div>
            <h2>All Categories</h2>
            {
                getData.data.news_category.map(cata => {
                    return <li key={cata.category_id} className={`cursor-pointer ${activeId === cata.category_id && "bg-slate-500"} p-2 bg-gray-300 my-2`}><Link href={`/category/${cata.category_id}`} className='block'>{cata.category_name}</Link></li>
                })
            }
        </div>
    );
};

export default LeftSidebar;