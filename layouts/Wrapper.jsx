import AuthCheck from "@/components/AuthCheck";

const Wrapper = ({ children }) => {
    return (
        <AuthCheck>
            {children}
        </AuthCheck>
    );
}

export default Wrapper;