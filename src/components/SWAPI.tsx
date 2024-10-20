import '@scss/_SWAPI.scss';
import { useEffect, useState } from 'react';
import { SwapiService } from '../services/SWAPI.service';
import type { Iswapi } from '../services/SWAPI.service';
import {
  ISWAPICharacter,
  ISWAPIPlanet,
  SWAPIStructure,
} from '../models/ISWAPICharacters';

const SWAPI = () => {
  const swapi: Iswapi = SwapiService;
  const [charactersArr, setCharactersArr] = useState<ISWAPICharacter[]>([]);
  const [characterInfo, setCharacterInfo] = useState<
    ISWAPICharacter | undefined
  >(undefined);

  useEffect(() => {
    addCharacters();
  }, []);

  async function addCharacters() {
    try {
      const data: SWAPIStructure = await swapi.getCharacters();
      setCharactersArr(await data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSelectedCharacter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const characterSelected = charactersArr.filter(
      (character: ISWAPICharacter) => character.name == e.target.value
    );

    setCharacterInfo(characterSelected[0]);
  };

  const CharacterList = () => {
    return (
      <select
        name="characters"
        id="characterList"
        onChange={handleSelectedCharacter}
      >
        <option selected value="">
          Seleccione un personaje
        </option>
        {charactersArr.length > 0 &&
          charactersArr.map((character: ISWAPICharacter) => (
            <option key={character.name}>{character.name}</option>
          ))}
      </select>
    );
  };

  const CharacterDescription = () => {
    const [planet, setPlanet] = useState('');

    if (characterInfo !== undefined) {
      useEffect(() => {
        getHomeWorld();
      }, [characterInfo]);

      const getHomeWorld = async () => {
        try {
          const data: ISWAPIPlanet = await swapi.getCharacterPlanet(
            characterInfo.homeworld
          );
          console.log(data);
          setPlanet(await data.name);
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <>
          <h3>
            Character Description <b>{characterInfo?.name}</b>
          </h3>
          <p>
            Gender: <b>{characterInfo?.gender}</b>
          </p>
          <p>
            Birthday: <b>{characterInfo?.birth_year}</b>
          </p>
          <p>
            Homeworld: <b>{planet}</b>
          </p>
          <p>
            height: <b>{characterInfo.height}</b>
          </p>
        </>
      );
    }
  };

  return (
    <>
      <section className="swapi">
        <h1>SWAPI </h1>
        <CharacterList />
        <CharacterDescription />
      </section>
    </>
  );
};

export default SWAPI;
