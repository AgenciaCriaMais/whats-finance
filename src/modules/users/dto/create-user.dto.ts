import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string; // A senha será criptografada na entidade User

  @IsOptional()
  @IsString()
  email?: string;
}
