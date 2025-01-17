import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRuanganDTO {
  @ApiProperty({ description: 'ID Ruangan', type: Number, example: 1 })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'Nama Ruangan', type: String, example: 'Lab Komputer' })
  @IsString()
  @IsNotEmpty()
  nama_ruangan: string;
}