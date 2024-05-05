import { Category } from "../../../../models/category.model";

const CategoryCard = ({id, name, image } : Category) => {
    let cateLink = `/products?cateid=${id}`;
    return (
        <div className="col-3">
            <a href={cateLink}>
                <div className="category-card" data-id={id}>
                    <img src={process.env.PUBLIC_URL + '/images/product/category/' + image} alt={name}/>
                    <div className="category-name">
                        <p>{name}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CategoryCard;