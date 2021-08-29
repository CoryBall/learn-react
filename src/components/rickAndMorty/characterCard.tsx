import { APICharacter } from '@/types';
import React from 'react';

export type CharacterCardProps = {
    character: APICharacter;
    onClick: (id: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = (props: CharacterCardProps) => {
    const {character, onClick} = props;

    return (
        <div
            className="flex w-full my-4 lg:w-1/2 h-52 rounded-md border-2 bg-gray-700 p-10 space-x-4 cursor-pointer hover:animate-pulse animate-none"
            onClick={() => onClick(character.id)}
        >
            <img src={character.image} alt={`${character.name} image`} />
            <div className="text-gray-200">
                <p>{character.name}</p>
                <p>{character.status}</p>
                <p>Last known location:</p>
                <p>{character.location.name}</p>
                <p>Number of episodes: {character.episode.length}</p>
            </div>
        </div>
    )
}

export default CharacterCard;