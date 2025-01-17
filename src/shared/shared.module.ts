import { Global, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Global()
@Module({
    providers : [PrismaService]
})
export class SharedModule {}
