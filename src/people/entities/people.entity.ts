import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class People {
  @ApiProperty({required: true})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({required: true})
  @Column()
  name: string;

  @ApiProperty({required: false})
  @Column()
  height: string;

  @ApiProperty({required: false})
  @Column()
  mass: string;

  @ApiProperty({required: false})
  @Column()
  hair_color: string;

  @ApiProperty({required: false})
  @Column()
  skin_color: string;

  @ApiProperty({required: false})
  @Column()
  eye_color: string;

  @ApiProperty({required: false})
  @Column()
  birth_year: string;

  @ApiProperty({required: false})
  @Column()
  gender: string;

  @ApiProperty({required: false})
  @Column()
  homeworld: string;

  @ApiProperty({required: false})
  @Column({nullable: true})
  films?: string;

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
