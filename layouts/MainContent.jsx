import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";
import Link from "next/link";

const MainContent = ({ children }) => {
    return <>
        <main>
            <Navbar />
            <div className="w-full flex">
                {/* <div className="p-3 border">
                    <div>
                        <div>
                            <Link href={'/'}>Home</Link>
                        </div>
                        <div>
                            <Link href={'/shortcuts'}>shortcuts</Link>
                        </div>
                        <div>
                            <Link href={'/profile'} >Profile</Link>
                        </div>
                    </div>
                </div> */}
                <SideNav />
                <div className="grow">
                    {children}
                </div>
            </div>
        </main>
    </>;
}

export default MainContent;