function Views(props) {
    return (
        <div className={"flex " + props.className}>
            {props.images.map((img, index) => {
                if (img.className) {
                    return <img key={index} alt="Front" src={img.src} className={img.className} />;
                } else {
                    return <img key={index} alt="Front" src={img} />;
                }
            })}
        </div>
    );
}

export default Views;
