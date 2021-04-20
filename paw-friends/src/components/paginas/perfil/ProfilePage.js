import PageTitle from '../../layouts/PageTitle'
import Navbar from '../../layouts/navbar/Navbar'
import ProfileCard from './ProfileCard'
import { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProfiles, selectProfilesById } from '../../../store/reducers/profilesReducer'

function ProfilePage() {
    
    let { id } = useParams();
    id = parseInt(id);

    const dispatch = useDispatch();
    const status = useSelector(state => state.profiles.status);
    const error = useSelector(state => state.profiles.error);
    var pageTitle ='';
    
    useLayoutEffect(() => {
        if(status === 'not_loaded' || status === 'saved' || status === 'deleted'){
            dispatch(fetchProfiles());
        }
        else if(status === 'failed'){
            setTimeout(() => dispatch(fetchProfiles(), 4000));
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

    const profile = useSelector(state => selectProfilesById(state, id));
    console.log(profile);
    let profileDisplay = ''
    
    if(status === 'loaded' || status === 'saved' || status === 'deleted'){
        profileDisplay = <ProfileCard profile={profile}/>;
      }else if(status === 'loading'){
        profileDisplay = <div>Carregando o perfil...</div>;
      }else if(status === 'failed'){
        profileDisplay = <div>Error: {error}</div>;
    }
    return(
        <>
            <Navbar/>
            <PageTitle title={pageTitle}/>
            <div className="container-fluid container-cards">
            {profileDisplay}
            </div> 
        </>
    );
}

export default ProfilePage;