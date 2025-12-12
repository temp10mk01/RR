function HomeImage({ src, alt, text }) {
    return(
        <div className="home-image-container">
            <div className="home-image-title">{ text }</div>
            <img className="home-image" src={ src } alt={ alt } />
        </div>
    )
}

export { HomeImage };
