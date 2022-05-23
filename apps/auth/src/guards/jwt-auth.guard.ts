import { AuthGuard } from '@nestjs/passport';

export default class JwtAuthGuard extends AuthGuard('jwt') {}
