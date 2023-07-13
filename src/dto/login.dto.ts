import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @ApiProperty({
    required: true,
    default: 'sarfraz@test.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    required: false,
    default: 'pass',
  })
  password: string;
}
