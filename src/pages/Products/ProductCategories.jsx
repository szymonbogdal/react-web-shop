import ActiveLink from "./ActiveLink";

function ProductCategories(){
    return (
        <nav className="product-categories">
            <ul className="categories__list">
                <li className="category__item">
                    <ActiveLink to="/products" text="All products"></ActiveLink>
                </li>
                <li className="category__item">
                    <ActiveLink to="/products/category/men's%20clothing" text="Men's clothing"></ActiveLink>
                </li>
                <li className="category__item">
                    <ActiveLink to="/products/category/women's%20clothing" text="Women's clothing"></ActiveLink>
                </li>
                <li className="category__item">
                    <ActiveLink to="/products/category/jewelery" text="Jewelery"></ActiveLink>
                </li>
                <li className="category__item">
                    <ActiveLink to="/products/category/electronics" text="Electonics"></ActiveLink>
                </li>  
            </ul>
        </nav>
    )
}

export default ProductCategories;