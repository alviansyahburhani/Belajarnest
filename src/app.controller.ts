import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { CreateMahasiswaDTO } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDTO } from './dto/update-mahasiswa.dto';
import { CreateRuanganDTO } from './dto/create-ruangan.dto';
import { RegisterUserDTO } from './dto/register-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { AuthGuard } from './auth.guard';
import { UserDecorator } from './user.decorator';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  
  @Get("/auth")
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  auth(@UserDecorator() user : User) {
    return user
  }


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("mahasiswa")
  getMahasiswa() {
    return this.appService.getMahasiswa()
  }

  @Post("mahasiswa")
  @ApiBody({ type : CreateMahasiswaDTO})
  createMahasiswa(@Body() mahasiswa : CreateMahasiswaDTO) {
    return this.appService.addMahasiswa(mahasiswa)
  }

  @Delete("mahasiswa/:nim")
  deleteMahasiswa( @Param("nim") nim : string) {
      return this.appService.deleteMahasiswa(nim)
  }

  @Put('mahasiswa/:nim')
  @ApiBody({ type: UpdateMahasiswaDTO })
  updateMahasiswa(
  @Param('nim') nim: string,
  @Body() mahasiswa: UpdateMahasiswaDTO) {
  return this.appService.updateMahasiswa(nim, mahasiswa);
  }
  //-----------------------------------------------

  //tabel ruangan
  @Get('ruangan')
  getRuangan() {
    return this.appService.getRuangan();
  }

  @Post('ruangan')
  @ApiBody({ type: CreateRuanganDTO })
  createRuangan(@Body() ruangan: CreateRuanganDTO) {
    return this.appService.addRuangan(ruangan);
  }
  // --------------------------------------


  @Post("register")
  @ApiBody({type :RegisterUserDTO})
  registerUser(@Body() user : RegisterUserDTO) {
    return this.appService.registerUser(user);
  }
  @Get("user")
  getUsers(){
    return this.appService.getUsers();
  }


@Post('login')
@ApiBody({ type: LoginUserDTO })
async login(@Body() loginData: LoginUserDTO) {
  return this.appService.login(loginData);
}
}