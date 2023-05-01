interface TechButtonType {
    href: string;
    img: string;
    text: string;
}

function TechButton({href, img, text}: TechButtonType) {
    return (
        <a href={href} className="techButtons">
            <img src={img} alt={text} width={65} height={65}/>
        </a>
    )
}

export default TechButton