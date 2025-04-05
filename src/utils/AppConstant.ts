import { toast } from "vue3-toastify";

// Login
export const LoginFormHeaderText = "Sign In";
export const LoginFormHeaderDescText = "If you have an account, please login:";
export const EmailIdPlaceHolderText = "john.doe@gmail.com";
export const PasswordPlaceHolderText = "Password";
export const PostLoginButtonClickText = "Verifying...";
export const MinPasswordCharLength = 4;
export const ShowPasswordIcon = "👁️";
export const HidePasswordIcon = "🙈";

// General
export const FeatureUnderDevelopmentInfoText = "This feature is under development.";

// Splash
export const SplashWaitMsg = "Loading your experience...";
export const DefaultSplashScreenHoldTime = 500; // In Ms

// AboutUs
export const AboutUsInitialIntroText = "If that's what you think how bout the other way around? How can you evaluate content without design? No typography, no colors, no layout, no styles, all those things that convey the important signals that go beyond the mere textual, hierarchies of information, weight, emphasis, oblique stresses, priorities, all those subtle cues that also have visual and emotional appeal to the reader. <br/><br/> Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require. Or else, an alternative route: set checkpoints, networks, processes, junctions between content and layout. Depending on the state of affairs it may be fine to concentrate either on design or content, reversing gears when needed."
export const DummyTeamInfoArr = [
  { id: 1, name: "John Doe", role: "CEO", info: 'The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to.', image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Jane Smith", role: "CTO", info: 'you wonder if something is wrong, it seems to seek your web workers toolbox, attention for all the wrong reasons.', image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Katharina Johnson", role: "Lead Designer", info: 'One of the villagers, Kristina Halvorson from Adaptive Path, holds steadfastly to the notion that design can’t be tested without real content', image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Bob Williams", role: "Software Engineer", info: 'you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox, as things happen, not always the way you like it.', image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]
export const DefaultIntroComponentObj = {
  header: "",
  desc: ""
}

// User
export const CreateNewUserText = "+ Create User";
export const UserPageInfoText = "Administrators can add users, while others can search and view users by name, email, or role.";
export const NumberOfRecordFoundMsg = "Total {number_of_users} found.";
export const FirstColumnHeaderText = "SR. No.";
export const SecondColumnHeaderText = "Role";
export const ThirdColumnHeaderText = "User Information";
export const AllRoleSelectOptionText = "All Roles";
export const NoUsersFoundMsg = "No user found.";

// Dashboard
export const DashboardPageInfoText = "Fun Lorem Ipsum text may appear in any size and font to simulate everything you create for your campaigns. you land on a sample web page or open an email template and see content beginning with lorem ipsum, the page creator placed that apparent gibberish there on purpose. <br/><br/>The short answer is that lorem ipsum text doesn't actually \"say\" anything meaningful. It's deliberately scrambled Latin that doesn't.If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade the site for its lack of helpful content for the reader. However, when you send sample layouts filled with fun lorem ipsum to your customers, they will focus on the look and feel of the page instead of digging into and arguing about the content. Nevertheless, lorem ipsum generators do not spew a random bank of words and paragraphs.";

// Pagination Setting
export const RecordsPerPage = 10;
export const MaxPageNumberToShowCount = 1;
export const HideNextPrevBtnWhenEnds = true; 
export const DisableBreakPointBtns = true;

// NotFound
export const NotFoundErrorHeaderText = "404";
export const ContentNotFoundText="Opsss...page not found.";
export const BackToHomeOptionText = "Back to Home";

// CreateNewUser Modal
export const CloseCreateNewUserModalBtnText = "Close";
export const NameInputLabelText = "Name:";
export const NameInputPlaceHolderText = "John Doe";
export const EmailInputLabelText = "Email:";
export const PasswordInputLabelText = "Password:";
export const PasswordInputPlaceHolderText = `Minimum of ${MinPasswordCharLength} characters required.`;
export const RoleInputLabelText = "Role:";
export const PostNewUserCreationMsg = "The user '{name}' has been created successfully.";
export const MinNameCharLength = 4;
export const CreateUserBtnText = "Create";

// NavBar
export const FirstOptionText = "Dashboard";
export const SecondOptionText = "Users";
export const ThirdOptionText = "About Us";
export const FourthOptionText = "Settings";
export const FifthOptionText = "Sign out";
export const AdminIntroHeaderText = "Admin Portal";

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

export enum UserOperationEnum {
  None = 0,
  Open_Dashboard = 1,
  Open_Settings = 2,
  Open_AboutUs = 3,
  Handle_Signout = 4,
  Open_Create_User_Modal = 5,
  Close_Create_User_Modal = 6
};

export const DefaultUserCreationObj = {
  id: "45T88-34DFs-hhedd$-yt123",
  name: "Harry Potter",
  email: "harry.potter@gmail.com",
  role: UserRoleEnum.User,
  password: '4%@qEE'
};
