import PageTitle from '../../layouts/PageTitle'
import Navbar from '../../layouts/navbar/Navbar'
import ProfileCard from './ProfileCard'
import { useSelector } from 'react-redux';
import profilesReducer from '../../../store/reducers'


function ProfilePage() {

    const profiles = useSelector(state => state.profiles)

    return(
        <>
            <Navbar/>
            <PageTitle title={"Meu Perfil"}/>
            <div className="container-fluid container-cards">
                <ProfileCard/>
            </div> 
        </>
    );
}

export default ProfilePage;