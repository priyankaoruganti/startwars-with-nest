import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  height: string;

  @Column()
  mass: string;

  @Column()
  hair_color: string;

  @Column()
  skin_color: string;

  @Column()
  eye_color: string;

  @Column()
  birth_year: string;

  @Column()
  gender: string;

  @Column()
  homeworld: string;

  @Column()
  films: string;

  //     "films": [
  //         "https://swapi.dev/api/films/1/",
  //         "https://swapi.dev/api/films/2/",
  //         "https://swapi.dev/api/films/3/",
  //         "https://swapi.dev/api/films/6/"
  //     ],
  //     "species": [],
  //     "vehicles": [
  //         "https://swapi.dev/api/vehicles/14/",
  //         "https://swapi.dev/api/vehicles/30/"
  //     ],
  //     "starships": [
  //         "https://swapi.dev/api/starships/12/",
  //         "https://swapi.dev/api/starships/22/"
  //     ],
  //     "created": "2014-12-09T13:50:51.644000Z",
  //     "edited": "2014-12-20T21:17:56.891000Z",
  //     "url": "https://swapi.dev/api/people/1/"
  // }
}
