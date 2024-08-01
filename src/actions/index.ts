"use server";

interface Character {
  firstName: string;
  lastName: string;
  imageUrl: any;
  image: string;
}

export async function fetchCharacters() {
  const characters: Character[] = await fetch(
    "https://thronesapi.com/api/v2/Characters"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  console.log(characters);

  return characters;
}
