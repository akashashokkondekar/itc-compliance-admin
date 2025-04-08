import { toast } from "vue3-toastify";
import type { UserObj, Info, Intro } from "../types/Interface";

// Login
export const LoginFormHeaderText: string = "Sign In";
export const LoginFormHeaderDescText: string = "If you have an account, please login:";
export const EmailIdPlaceHolderText: string = "john.doe@example.com";
export const PasswordPlaceHolderText: string = "Password";
export const PostLoginButtonClickText: string = "Verifying...";
export const MinPasswordCharLength: number = 4;
export const ShowPasswordIcon: any = "👁️";
export const HidePasswordIcon: any = "🙈";

// General
export const FeatureUnderDevelopmentInfoText: string = "This feature is under development.";
export const ServerWaitMsgText: string = "Loading...";

// Splash
export const SplashWaitMsg: string = "Loading your experience...";
export const DefaultSplashScreenHoldTime: number = 500; // In Ms

// AboutUs
export const AboutUsInitialIntroText: string = "If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. <br/><br/> Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require. Or else, an alternative route: set checkpoints, networks, processes, junctions between content and layout. Depending on the state of affairs it may be fine to concentrate either on design or content, reversing gears when needed."
export const DummyTeamInfoArr: any = [
  { id: 1, name: "John Doe", role: "CEO", info: 'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to.', image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Jane Smith", role: "CTO", info: 'you wonder if something is wrong, it seems to seek your web workers toolbox, attention for all the wrong reasons.', image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Katharina Johnson", role: "Lead Designer", info: 'One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design can’t be tested without real content', image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Bob Williams", role: "Software Engineer", info: 'you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it.', image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

// User
export const CreateNewUserText: string = "+ Create User";
export const UserPageInfoText: string = "Administrators can add users, while others can search and view users by name, email, or role.";
export const NumberOfRecordFoundMsg: string = "Total {number_of_users} found.";
export const FirstColumnHeaderText: string = "SR. No.";
export const SecondColumnHeaderText: string = "Role";
export const ThirdColumnHeaderText: string = "User Information";
export const AllRoleSelectOptionText: string = "All Roles";
export const NoUsersFoundMsg: string = "🔍 Oops! No records found with these filters. Try tweaking them to find what you are looking for.";
export const SearchByNameOrEmailPlaceholderText: string = "Search by name or email";

// Table
export const MaxTableHeaderColCount = 3;
export const DefaultEmptyLoadingSkeletonRowCount = 10;

// Dashboard
export const DashboardPageInfoText: string = "Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns. you land on a sample web page or open an email template and see content beginning with lorem ipsum, the page creator placed that apparent gibberish there on purpose. <br/><br/>The short answer is that lorem ipsum text doesn't actually \"say\" anything meaningful. It's deliberately scrambled Latin that doesn't.If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs.";

// Pagination Setting
export const RecordsPerPage: number = 10;
export const MaxPageNumberToShowCount: number = 1;
export const HideNextPrevBtnWhenEnds: boolean = true; 
export const DisableBreakPointBtns: boolean = true;

// NotFound
export const NotFoundErrorHeaderText: string = "404";
export const ContentNotFoundText: string = "Opsss...page not found.";
export const BackToHomeOptionText: string = "Back to Home";

// CreateNewUser Modal
export const CreateNewUserModalHeaderText = "Add New User";
export const CreateNewUserModalDescText = "Provide the following details to register a new user.";
export const CloseCreateNewUserModalBtnText: string = "Close";
export const NameInputLabelText: string = "Name:";
export const NameInputPlaceHolderText: string = "John Doe";
export const NameInputHintText: string = "Enter full name (e.g., John Doe)";
export const EmailInputLabelText: string = "Email:";
export const EmailInputHintText: string = "Enter a valid email address (e.g., john@example.com)";
export const PasswordInputLabelText: string = "Password:";
export const PasswordInputPlaceHolderText: string = "1^%aA";
export const PasswordInputHintText: string = `Minimum of ${MinPasswordCharLength} characters required.`;
export const RoleInputLabelText: string = "Role:";
export const RoleInputHintText: string = "Select the user's role";
export const PostNewUserCreationMsg: string = "The user '{name}' has been created successfully.";
export const MinNameCharLength: number = 4;
export const CreateUserBtnText: string = "Create";


// NavBar
export const FirstOptionText: string = "Dashboard";
export const SecondOptionText: string = "Users";
export const ThirdOptionText: string = "About Us";
export const FourthOptionText: string = "Settings";
export const FifthOptionText: string = "Sign out";
export const AdminIntroHeaderText: string = "Admin Portal";

// Server
export const GenericServerErrorMessageOne: string = "An error occurred while processing the request. Please try again.";
export const GenericServerErrorMessageTwo: string = "Oops! Something went wrong. Please try again.";
export const NoInternetConnectionAvailableMsg: string = "You are currently offline. Please check your internet connection.";

// Toast
export const AutoCloseToastTimeout: number = 2000; // In ms
export const SupportRTFInToast: boolean = true;
export const HideAutoCloseProgressBar: boolean = false;
export const ToastTheme: any = "dark";
export const ToastPosition: any = toast.POSITION.BOTTOM_RIGHT;

// Localstorage
export const CurrUserTokenKey = "Token";
export const CurrUserObjKey = "CurrUserObj";
export const UserListKey = "UserList";

// Roles
export const NoneRoleText: string = "Unknown";
export const AdminRoleText: string = "Administrator";
export const UserRoleText: string = "Participant";

// Enums
export enum UserRoleEnum {
  None = 0,
  Admin = 1,
  User = 2
};

export enum ServerEnum {
  Local = 0,
  Dev = 1,
  Prod = 2
};

export enum MsgTypeEnum {
  Default = 0,
  Info = 1,
  Error = 2,
  Success = 3,
  Warning = 4
};

export enum UserOperationEnum {
  None = 0,
  Open_Dashboard = 1,
  Open_Settings = 2,
  Open_AboutUs = 3,
  Handle_Signout = 4,
  Open_Create_User_Modal = 5,
  Close_Create_User_Modal = 6
};

// Default Objects
export const DefaultUserCreationObj: UserObj = {
  id: "45T88-34DFs-hhedd$-yt123",
  name: "Harry Potter",
  email: "harry.potter@example.com",
  role: UserRoleEnum.User,
  password: '4%@qEE'
};

export const DefaultIntroComponentObj: Intro = {
  header: "",
  desc: ""
}

export const DefaultInfoComponentObj: Info = {
  msg: "",
  type: MsgTypeEnum.Default
}

