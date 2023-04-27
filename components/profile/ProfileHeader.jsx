

const ProfileHeader = ({ avatar, following, followers, username }) => {
    return (<div className="flex flex-col md:flex-row items-center">
        <div className="me-[50px] mb[50px] md:mb-0">
            <img className="rounded-full h-[90px] w-[90px]" src={avatar} alt="avatar" />
        </div>
        <div>
            <h3 className="font-medium text-2xl leading-[136%] mb-2">{username}</h3>
            <p className="mb-2 font-light text-base">Joined on 12/3/2023</p>
            <div className="flex text-base font-light">
                <div className="me-[18px]">
                    <span className="font-medium">{followers}</span> followers
                </div>
                <div>
                    <span className="font-medium">{following}</span> following
                </div>
            </div>
        </div>
    </div>);
}

export default ProfileHeader;