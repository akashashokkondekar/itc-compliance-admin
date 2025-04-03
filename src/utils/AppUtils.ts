import { AdminRoleText, NoneRoleText, UserRoleEnum, UserRoleText } from "./AppConstant";

export class AppUtils {

  static getRoleName = (userRole: number): string => {

    let valueToReturn = "";
    switch (userRole) {

      default:
      case UserRoleEnum.None:
        valueToReturn = NoneRoleText;
        break;

      case UserRoleEnum.Admin:
        valueToReturn = AdminRoleText;
        break;

      case UserRoleEnum.User:
        valueToReturn = UserRoleText;
        break;
    }
    return valueToReturn;

  }

  static isValidateEmailAddress = (email: string): boolean => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  static getNewRoleNameByKey = (key: any): string => {

    var valueToReturn = NoneRoleText;
    switch (parseInt(UserRoleEnum[key])) {

      case UserRoleEnum.User:
        valueToReturn = UserRoleText;
        break;

      case UserRoleEnum.Admin:
        valueToReturn = AdminRoleText;
        break;

      default:
        break;

    }
    return valueToReturn;

  }

  static getEnumValueFromKeyName = (roleKey: string): number => {
    return UserRoleEnum[roleKey as keyof typeof UserRoleEnum];
  };

}