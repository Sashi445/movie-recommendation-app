import AuthCheck from "@/components/AuthCheck";
import { signinUserRedux } from "@/store/reducers/authReducer";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

  const router = useRouter();

  const authState = useSelector(state => state.auth);


  const dispatch = useDispatch();

  useEffect(() => {
    if (!authState.user) return;
    router.replace("/")
  }, [authState.user])

  const handleLoginBtnClick = () => {
    dispatch(signinUserRedux())
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <AuthCheck />
        <div>Login</div>
        <div>
          <button onClick={handleLoginBtnClick}>
            sign in with google
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
