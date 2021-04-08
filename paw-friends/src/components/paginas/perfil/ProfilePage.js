import PageTitle from '../../layouts/PageTitle'
import Navbar from '../../layouts/navbar/Navbar'
import ProfileCard from './ProfileCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProfiles, selectProfilesById } from '../../../store/reducers/profilesReducer'

function ProfilePage() {
    
    let { id } = useParams();
    id = parseInt(id);

    const dispatch = useDispatch();
    const profile = useSelector(state => selectProfilesById(state, id));
    const status = useSelector(state => state.profiles.status);
    const error = useSelector(state => state.profiles.error);
    var pageTitle ='';
    
    useEffect(() => {
        if(status === 'not_loaded'){
            dispatch(fetchProfiles());
        }
        else if(status === 'saved'){
            dispatch(fetchProfiles(), 2000);
        }
    }, [status, dispatch])


    switch(status){
        case 'loading':
            pageTitle = 'Carregando perfil';
            break;
        case 'failed':
            pageTitle = 'Erro! ' + error;
            break;
        default:
            pageTitle = 'Meu Perfil';
            break;
    };


    return(
        <>
            <Navbar/>
            <PageTitle title={pageTitle}/>
            <div className="container-fluid container-cards">
                <ProfileCard profile={profile}/>
            </div> 
        </>
    );
}

export default ProfilePage;