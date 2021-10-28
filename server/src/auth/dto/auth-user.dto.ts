import { UserRole } from 'src/shared/enums/user-role';

export class AuthUser {
  id: number;
  role: UserRole;

  // create AuthUser instance
  static of(id: number, role: UserRole) {
    const authUser = new AuthUser();
    authUser.id = id;
    authUser.role = role;
    return authUser;
  }
}
