import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDTO } from 'src/dto/login-user.dto';


@Controller('login')
export class LoginController {
  @Post()
  async login(@Body() LoginUserDTO: LoginUserDTO) {
    const { username, password } = LoginUserDTO;

    // Contoh validasi, ganti dengan logika autentikasi sesuai kebutuhan Anda
    if (username === 'admin' && password === 'password123') {
      // Jika login berhasil, kirimkan token dan redirect
      return { 
        token: 'your_generated_token', // Token yang dihasilkan
        redirect: '/dashboard'  // URL yang akan di-redirect setelah login
      };
    } else {
      // Jika kredensial salah, kirimkan error
      throw new Error('Invalid credentials');
    }
  }
}
