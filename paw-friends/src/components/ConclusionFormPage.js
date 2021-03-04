//Form Page from the app

import Navbar from './Navbar'
import PageTitle from './PageTitle'
import PageSubtitle from './PageSubtitle';
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