import ReactDom from 'react-dom/client';
import Chat from './components/Chat';
import Header from './components/Header';
import Auth from './components/Auth';

function App() {
    return (
        <>
            <Header/>
            <Auth/>
        </>

    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);