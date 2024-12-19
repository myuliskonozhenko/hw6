import React, { useState, useEffect } from 'react';
import PokemonDetails from './PokemonDetails';
import styles from './PokemonViewer.module.css';

function PokemonViewer() {
    const [pokemon, setPokemon] = useState(null);

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 1010) + 1;
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    };

    const handleFeedback = async (feedback) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pokemon: pokemon.name, feedback }),
            });
            const result = await response.json();
            console.log('Feedback sent:', result);
        } catch (error) {
            console.error('Error sending feedback:', error);
        }
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    return (
        <div className={styles.viewer}>
            <button onClick={fetchRandomPokemon} className={styles.button}>Show Pokemon</button>
            {pokemon && (
                <>
                    <PokemonDetails pokemon={pokemon} />
                    <div className={styles.feedbackButtons}>
                        <button onClick={() => handleFeedback('cool')} className={styles.coolButton}>Крутой</button>
                        <button onClick={() => handleFeedback('tacky')} className={styles.tackyButton}>Так себе</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PokemonViewer;
