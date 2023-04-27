
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthCheck = ({ children }) => {

    const authState = useSelector(state => state.auth);
    const router = useRouter();

    useEffect(() => {
        const user = authState.user;
        console.log(user);
        if (!user) {
            router.replace("/login");
        }
    }, [authState])

    return (<>{children}</>);
}

export default AuthCheck;