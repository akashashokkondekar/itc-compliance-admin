import { toast } from "vue3-toastify";

// Login
export const LoginFormHeaderText = "Sign In";
export const LoginFormHeaderDescText = "If you have an account, please login:";
export const EmailIdPlaceHolderText = "john.doe@gmail.com";
export const PasswordPlaceHolderText = "Password";
export const PostLoginButtonClickText = "Verifying...";

// Server
export const GenericServerErrorMessageOne = "An error occurred while processing the request. Please try again.";
export const GenericServerErrorMessageTwo = "Oops! Something went wrong. Please try again.";
export const NoInternetConnectionAvailableMsg = "You are currently offline. Please check your internet connection.";

// Toast
export const AutoCloseToastTimeout = 2000; // In ms
export const SupportRTFInToast = true;
export const HideAutoCloseProgressBar = false;
export const ToastTheme = "dark";
export const ToastPosition = toast.POSITION.BOTTOM_RIGHT;

// Roles
export const NoneRoleText = "Unknown";
export const AdminRoleText = "Administrator";
export const UserRoleText = "Participant";

export enum UserRoleEnum {
  None = 0,
  Admin = 1,
  User = 2
};

export enum ToastTypeEnum {
  Default = 0,
  Info = 1,
  Error = 2,
  Success = 3,
  Warning = 4
};

export const DefaultUserCreationObj = {
  name: "Harry Potter",
  email: "harry.potter@gmail.com",
  role: UserRoleEnum.User,
  password: '4%@qEE'
};
