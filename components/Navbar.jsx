import { useSelector } from "react-redux";


const Navbar = ({ handleSideNav }) => {

    const authState = useSelector(state => state.auth);

    return (<div className="bg-dark-primary w-full flex items-center justify-between px-4 py-3">
        {/* toggler */}
        <div>
            Navbar
        </div>
        {/* navitems */}
        {
            !authState.user
                ? <button className="bg-theme-secondary rounded-full min-w-[200px]">
                    Login
                </button>
                : <>
                    <div className="w-[40%]">
                        <input className="w-full" type="text" placeholder="search" />
                    </div>
                    <div className="">
                        <img className="rounded-full h-8 w-8" src={authState.user.avatar} alt="avatar" />
                    </div>
                </>
        }
    </div>);
}

export default Navbar;