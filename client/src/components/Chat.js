import React, { useState, useEffect } from 'react'

function Chat() {
    useEffect(() => {
        fetchData();
    }, [])
    const [chats, setChats] = useState([]);

    async function fetchData() {
        const data = await fetch('http://localhost:3000/chats');
        const chats = await data.json();
        setChats(chats);
    }

    return 
        // chats.map((el) => <p key={el._id}>{el.chatName}</p> )
    
}

export default Chat