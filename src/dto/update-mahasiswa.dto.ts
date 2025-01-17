import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { jenis_kelamin } from '@prisma/client';

export class UpdateMahasiswaDTO {
  @ApiProperty({ description: 'Nama Mahasiswa', type: String, example: 'alvian', required: false })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  nama?: string;

  @ApiProperty({ description: 'Kelas', type: String, example: '5A', required: false })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  kelas?: string;

  @ApiProperty({ description: 'Jurusan', type: String, example: 'Informatika', required: false })
  @IsString()
  @IsOptional()
  @Length(1, 30)
  jurusan?: string;

  @ApiProperty({ description: 'Jenis Kelamin', enum: jenis_kelamin, example: 'L', required: false })
  @IsEnum(jenis_kelamin)
  @IsOptional()
  jenis_kelamin?: jenis_kelamin;
}