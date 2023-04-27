import Link from "next/link";


const SideNav = () => {
    return (<div className="min-w-[208px]">
        <Link href={'/'}>
            <div className="w-full my-[12px] ml-[18px] text-[16px] leading-[136%] font-light">
                Home
            </div>
        </Link>
        <Link href={'/shortcuts'}>
            <div className="w-full my-[12px] ml-[18px] text-[14px] font-light">
                Shortcuts
            </div>
        </Link>
        <Link href={'/profile'}>
            <div className="w-full my-[12px] ml-[18px] text-[14px] font-light">
                Profile
            </div>
        </Link>
    </div>);
}

export default SideNav;