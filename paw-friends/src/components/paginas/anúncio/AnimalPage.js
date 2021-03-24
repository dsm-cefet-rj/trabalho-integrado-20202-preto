import Navbar from '../../layouts/navbar/Navbar';
import AnimalCard from './AnimalCard';
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { selectAnunciosById } from '../../../store/reducers/anunciosReducer';
   
export default function AnimalPage() {
    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    id = parseInt(id);

    const anuncio = useSelector(state => selectAnunciosById(state, id));
    return (
        <>
            <Navbar/>
            <div className="container-fluid container-cards">
                <AnimalCard anuncio={anuncio} />
            </div>
        </>
    );
}