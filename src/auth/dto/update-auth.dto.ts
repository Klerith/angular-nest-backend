import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CreateUserDto) {}
