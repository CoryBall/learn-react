import React from 'react';
import axios from 'axios';
import {RickAndMortyApi} from '@/config'
import {APIResult, APICharacter, Pagination} from '@/types';
import { CharacterList } from '@/components/rickAndMorty';
import { useHistory } from 'react-router-dom';

const AllCharactersPage: React.FC = () => {
    let history = useHistory();
    const [characters, setCharacters] = React.useState<APICharacter[]>([]);

    React.useEffect(() => {
        (async () => {
            const result = await axios.get<APIResult<APICharacter>>(`${RickAndMortyApi}/character`);
            setCharacters(result.data.results);
        })();
    }, []);

    function navigateToCharacterPage(id: number){
        history.push(`/character/${id}`);
    }

    if (!characters){
        return (<span>loading...</span>)
    }

    return (
        <div>
            <CharacterList data={characters} onClick={navigateToCharacterPage} />
        </div>
    )
}

export default AllCharactersPage;