
function HomeItem(props){
    const {title, image} = props.product; 
    return(
        <div className="home-item">
            <img className="home-item__image" src={image} alt={title} />
        </div>
    )

}

export default HomeItem;