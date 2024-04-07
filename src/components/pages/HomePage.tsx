import { useState } from 'react';
import { Category } from '../../models/category.model';
import CategoryCard from './items/product/CategoryCard';

const HomePage = () => {
    const [categories, setCategory] = useState<Category[]>([
        { id: 1, name: "Category 1", image: "/images/product/category/category-1.jpg"},
        { id: 2, name: "Category 3", image: "/images/product/category/category-2.jpg"},
        { id: 3, name: "Category 3", image: "/images/product/category/category-3.jpg"},
    ]);
    return (
        <div className="homepage">
            <div className="row homepage-banner">
                <div className="col-2">
                    <h1>Give Your Workout <br/> A New Style!</h1>
                    <p>Success isn't always about greatness. It;s about consistency. Consistent <br/> hard work gains
                        success. Greatness will come.</p>
                    <a href="/products" className="btn">Explore Now &#8594;</a>
                </div>
                <div className="col-2">
                    <img src={process.env.PUBLIC_URL + '/images/others/banner.png'} alt="" />
                </div>
            </div>
            <div className="categories">
                <div className="small-container">
                    <h2 className="title">Latest Categories</h2>
                    <div className="row">
                        {
                            categories.map(item => <CategoryCard id={item.id} name={item.name} image={item.image} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;