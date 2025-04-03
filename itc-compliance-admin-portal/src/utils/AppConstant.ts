export const LoginFormHeaderText = "Sign In";
export const LoginFormHeaderDescText = "If you have an account, please login:";

export const NoneRoleText = "Unknown";
export const AdminRoleText = "Administrator";
export const UserRoleText = "Participant";

export enum UserRoleEnum {
  None = 0,
  Admin = 1,
  User = 2
};

export const DefaultUserCreationObj = {
  name: "Harry Potter",
  email: "harry.potter@gmail.com",
  role: UserRoleEnum.User,
  password: '4%@qEE'
};
