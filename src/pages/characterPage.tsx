import { RickAndMortyApi } from '@/config';
import { APICharacter, APIResult } from '@/types';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

type CharacterPageParams = {
    id: string;
}

const CharacterPage: React.FC = () => {
    const { id } = useParams<CharacterPageParams>();
    const characterId = Number(id);

    const [character, setCharacter] = React.useState<APICharacter | undefined>();

    React.useEffect(() => {
        (async () => {
            const result = await axios.get<APICharacter>(`${RickAndMortyApi}/character/${characterId}`);
            setCharacter(result.data);
        })();
    }, []);

    if (!character) return <span className="m-auto animate-bounce">Loading...</span>

    return (
        <div className="m-auto space-y-2 text-center">
            <p>{character.name}</p>
            <img src={character.image} className="h-96" />
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Last known location: {character.location.name}</p>
        </div>
    )
}

export default CharacterPage;