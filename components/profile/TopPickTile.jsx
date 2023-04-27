import Badge from "../Badge";


const TopPickTile = ({ rank, title, rating, likes, shares }) => {

    return (<div className="flex h-[112px] items-center gap-[35px]">
        <div className="font-extrabold text-[90px] leading-[136%]">
            {`#${1}`}
        </div>
        <div className="">
            <img className="max-h-[112px]" src="https://picsum.photos/1600/900" alt="movie-tile" />
        </div>
        <div className="grow flex flex-col h-full justify-between">
            {/* movie title and rating  */}
            <div className="flex justify-between mb-2">
                {/* movie title  */}
                <p className="font-bold text-[35px] leading-[136%] trailing-[0.02em]">{title}</p>
                {/* rating  */}
                <p className="font-semibold text-[18px] leading-[136%] trailing-[0.02em]">{rating}</p>
            </div>
            {/* platform ratings  */}
            <div>
                <Badge className="me-1">100</Badge>
                <Badge>200</Badge>
            </div>
        </div>
    </div>);
}

export default TopPickTile;