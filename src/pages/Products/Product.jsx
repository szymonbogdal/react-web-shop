function Product(props){
    const {id, image, title, price, category } = props.product;
    return(
        <>
            <img src={image} alt={title} />
            <p className="category">{category}</p>
            <p className="title">{title}</p>
            <div className="info">
                <p>{price}$</p>
                <p className="add">Add</p>
            </div>
            
        </>
    )

}

export default Product;