import { ISWAPICharacter, ISWAPIPlanet } from '../models/ISWAPICharacters';

const url = 'https://swapi.dev/api/people';
export interface Iswapi {
  getCharacters: () => Promise<ISWAPICharacter[]>;
  getCharacterPlanet: (e: string) => Promise<ISWAPIPlanet>;
}

export const SwapiService = {
  getCharacters: async () => {
    const fetchData = await fetch(url);

    if (!fetchData.ok) {
      throw new Error(`La petición ha fallado: ${fetchData.status}`);
    }

    return await fetchData.json();
  },
  getCharacterPlanet: async (planetURL: string) => {
    const fetchData = await fetch(planetURL);

    if (!fetchData.ok) {
      throw new Error(`La petición ha fallado: ${fetchData.status}`);
    }

    return await fetchData.json();
  },
};
