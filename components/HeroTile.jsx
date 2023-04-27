
const HeroTile = ({ title, img, rating, description, runtime }) => {

    const miniDesc = description.slice(0);

    return (<div className="h-[400px] max-w-[80%] relative rounded-xl flex">
        <div className="absolute z-2 h-full w-full rounded-xl bg-gradient-to-tr from-black to-transparent">
        </div>
        <div className="grow px-3 rounded-xl text-white h-full flex flex-col justify-center">
            <div>{title}</div>
            <div className="">{miniDesc}</div>
            <div> {runtime} | {rating}</div>
        </div>
        <img className="h-full rounded-xl" src={img} alt="hero-img" />
    </div>);
}

export default HeroTile;