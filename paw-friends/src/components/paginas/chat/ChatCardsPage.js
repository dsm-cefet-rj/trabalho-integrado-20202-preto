//Chat Page from the app

import Navbar from '../../layouts/navbar/Navbar';
import PageTitle from '../../layouts/PageTitle';
import UserCards from './UserCards';

function ChatCardsPage() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"mensagens"}/>
            <UserCards/>
            
        </>
    );
}

export default ChatCardsPage;