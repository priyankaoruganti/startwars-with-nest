import { IsString } from 'class-validator';

export class PeopleDto {
  @IsString()
  id: boolean;

  @IsString()
  name: string;

  @IsString()
  birth_year: string;
}
