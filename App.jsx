import React from 'react';
import PokemonViewer from './components/PokemonViewer';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Who is that pokemon?</h1>
            </header>
            <main>
                <PokemonViewer />
            </main>
        </div>
    );
}

export default App;