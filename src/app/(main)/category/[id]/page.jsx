import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/Data';
import React from 'react';


const CategoryPage = async ({ params }) => {
    
    const { id } = await params;

    const getData = await getCategories();
    const news = await getNewsByCategoryId(id);


    return (
        <div>
            <div className="grid grid-cols-12 gap-4 my-14">
                <div className="col-span-3 flex flex-col gap-4 p-4 list-none">
                    <LeftSidebar getData={getData} activeId={id} />
                </div>

                <div className="bg-red-400 col-span-6">
                    <h2>All News</h2>
                    {
                        news.data.map(n => {
                            return <NewsCard key={n._id} news = {n}/>
                        })
                    }
                </div>

                <div className="bg-pink-200 col-span-3">
                    <h2>Socail Icons</h2>
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;