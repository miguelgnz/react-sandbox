import * as actions from "@/actions";

interface Character {
  firstName: string;
  lastName: string;
  imageUrl: any;
  image: string;
}

export default async  function Characters() {

  const characters: Character[]  = await actions.fetchCharacters();

  return (
    <div>
      {characters.map((char: Character, index: number) => {
        return (
          <div key={index}>
            <p>{`${char.firstName} ${char.lastName}`}</p>
            <div style={{}}>
              <img
                src={char.imageUrl}
                alt={char.image}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
