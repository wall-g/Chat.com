import ReactDom from 'react-dom/client';
import Chat from './components/Chat';
import Home from './components/Home';

function App() {
    return (
        <>
            <Home/>
            <Chat/>
        </>

    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);