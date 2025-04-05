import { AdminRoleText, NoneRoleText, UserRoleEnum, UserRoleText, ToastTypeEnum, AutoCloseToastTimeout, SupportRTFInToast, HideAutoCloseProgressBar, ToastTheme, ToastPosition, } from "./AppConstant";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
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

  };

  static getToastType = (toastType: number): any => {

    let valueToReturn = "info";
    switch (toastType) {

      default:
      case ToastTypeEnum.Default:
        valueToReturn = "default";
        break;

      case ToastTypeEnum.Error:
        valueToReturn = "error";
        break;

      case ToastTypeEnum.Success:
        valueToReturn = "success";
        break;

      case ToastTypeEnum.Warning:
        valueToReturn = "warning";
        break;
    }
    return valueToReturn;

  };

  static showToastMsg = (strToShow: string, toastType: number): void => {

    toast(strToShow, {
      type: AppUtils.getToastType(toastType),
      dangerouslyHTMLString: SupportRTFInToast,
      autoClose: AutoCloseToastTimeout,
      hideProgressBar: HideAutoCloseProgressBar,
      theme: ToastTheme,
      position: ToastPosition,
    });

  };

  static isValidateEmailAddress = (email: string): boolean => {

    var re = /\S+@\S+\.\S+/;
    return re.test(email);

  };

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

  };

  static getEnumValueFromKeyName = (roleKey: string): number => {
    return UserRoleEnum[roleKey as keyof typeof UserRoleEnum];
  };
  
}
