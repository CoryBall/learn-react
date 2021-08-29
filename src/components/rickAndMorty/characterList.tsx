import { APICharacter } from '@/types';
import React from 'react';
import CharacterCard from './characterCard';

type CharacterListProps = {
    data: APICharacter[];
    onClick: (id: number) => void;
}

const CharacterList: React.FC<CharacterListProps> = (props: CharacterListProps) => {
    const {data, onClick} = props;

    return (
        <div className="w-3/4 mx-auto flex flex-wrap">
            {data.map((character: APICharacter) =>
                <CharacterCard character={character} onClick={onClick} key={character.id} />    
            )}
        </div>
    )
}

export default CharacterList;