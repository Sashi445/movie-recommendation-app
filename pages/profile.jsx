import Wrapper from "@/layouts/Wrapper";
import { fetchProfile } from "@/store/reducers/profileReducer";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainContent from '@/layouts/MainContent';
import ProfileHeader from "@/components/profile/ProfileHeader";
import TopPickTile from "@/components/profile/TopPickTile";


const Profile = () => {

    const profile = useSelector(state => state.profile);

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if (!user) return;
        dispatch(fetchProfile(user.uid));
    }, [])

    return (
        <>
            <Wrapper>
                <MainContent>
                    {(!profile.profile && profile.status === 'IDLE') && <div>You are not logged in</div>}
                    {(!profile.profile && profile.status === 'LOADING') && <div>Loading your profile</div>}
                    {(profile.profile && profile.status === 'SUCCESS') && <div className="w-full px-5 py-3">
                        <ProfileHeader avatar={profile.profile.avatar} username={profile.profile.username} followers={profile.profile.following} following={profile.profile.following} />
                        <div>
                            <TopPickTile title={'Blade Runner'} rating={8.1} />
                        </div>
                    </div>}
                </MainContent>
            </Wrapper>
        </>
    );
}

export default Profile;