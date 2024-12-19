import React from 'react';
import styles from './PokemonDetails.module.css';

function PokemonDetails({ pokemon }) {
    const { name, sprites, types, height, weight } = pokemon;
    return (
        <div className={styles.details}>
            <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <img src={sprites.front_default} alt={name} className={styles.image} />
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>{types.map((type) => type.type.name).join(', ')}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{height / 10} m</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{weight / 10} kg</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PokemonDetails;
