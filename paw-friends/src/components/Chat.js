//Chat Page from the app

import Navbar from './Navbar'
import PageTitle from './PageTitle'
import UserCards from './UserCards';



function Chat() {
    return (
        <>
            <Navbar/>
            <PageTitle title={"mensagens"}/>
            <UserCards/>
        </>
    );
}

export default Chat;