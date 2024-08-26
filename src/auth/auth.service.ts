import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from '../schemas/user.schema';
import { SignUpUserDto } from './dto/sing-up.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async login(user: any) {
    const res = await this.userModel.findOne(user);
    if (!res || res.password !== res.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: res._id, email: res.email, name: res.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(user: SignUpUserDto) {
    const res = await this.userModel.findOne({ email: user.email });
    if (res) {
      throw new ConflictException('This email already registered');
    }

    const result = await this.userModel.create(user);

    return result;
  }
}
