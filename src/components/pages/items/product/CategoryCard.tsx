import { Category } from "../../../../models/category.model";

const CategoryCard = ({id, name, image } : Category) => {
    return (
        <div className="col-3">
            <img src={process.env.PUBLIC_URL + image} alt={name} data-id={id} />
        </div>
    )
}

export default CategoryCard;