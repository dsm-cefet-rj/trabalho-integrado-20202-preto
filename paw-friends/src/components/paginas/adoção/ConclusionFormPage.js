import Navbar from '../../layouts/navbar/Navbar'
import PageTitle from '../../layouts/PageTitle'
import PageSubtitle from '../../layouts/PageSubtitle';
import ConclusionForm from './ConclusionForm';


function ConclusionFormPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"PARABÉNS!"}/>
            <PageSubtitle subtitle={"Complete o formulário para concluir a adoção"}/>
            <ConclusionForm />
        </>
    );
}

export default ConclusionFormPage;