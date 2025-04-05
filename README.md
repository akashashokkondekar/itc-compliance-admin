# Admin Portal

This is the Admin Portal, a Vue.js and TypeScript-based application that integrates user management, login functionality, and admin control features. The project includes various UX/UI enhancements, validation, and mock GraphQL API integration. The app has been built with a focus on accessibility, responsiveness, and a clean, scalable architecture.

## Table of Contents
- [Features](#features)
- [Core Features](#core-features)
- [Bonus Features](#bonus-features)
- [Setup Instructions](#setup-instructions)
- [Package Information](#package-information)
- [Additional Information](#additional-information)

## Features
The portal includes several core and bonus features to improve the overall user experience and functionality:

### Core Features:
1. **Login Page**
   - Form with email and password input fields.
   - On submission, sends `login(email, password)` request to a mock GraphQL API.
   - Stores authentication token in local state management (Pinia).
  
2. **Protected Routes**
   - Protects routes from unauthorized users.
   - If a user is not authenticated, they are redirected to the login page.

3. **User List Page**
   - Dynamically fetches a list of users from a mock GraphQL API.
   - Displays a table with user data: name, email, and role.
   - Implements pagination for easy navigation of user data.

4. **Logout Functionality**
   - Clears the token on logout and redirects the user back to the login page.

### Bonus Features:
1. **UX / Design Enhancements**
   - **Responsive Design**: Fully responsive across mobile, tablet, and desktop using **TailwindCSS**.
   - **Loading Indicators**: Skeleton loaders and spinners to indicate data loading.
   - **Toast Notifications**: Success and error messages are displayed using **Vue3 Toastify**.
   - **Empty and Error State Messaging**: Displays a friendly message in all required places.
   - **Form Validation**: Input validation with visual feedback on login and user creation forms.

2. **Create User Flow (Mocked version)**
   - Only users with the **“Administrator”** role can create new users.
   - Clicking the "+ Create User" button opens a modal.
   - Pre-fills the form with mocked data (Ignored data persistence case).
   - Displays a success toast after user creation.

## **Live Demo**
Coming soon...

## Setup Instructions

1.**Set up GraphQL Mock Server:**
Before running the admin portal, you need to set up the GraphQL Mock Server to handle the API requests. This mock server is essential for the application to work since it serves the user data and login API responses.

Clone the GraphQL Mock Server repository [Link: https://github.com/akashashokkondekar/mock-graphql-server.git] and follow its setup instructions.

Once the mock server is running, you can proceed with the next steps.

2.**Clone the admin repository:**
  ```bash
    git clone https://github.com/akashashokkondekar/itc-compliance-admin.git
    cd <project-folder>
  ```

3.**Pull all branches** from the origin:
   ```bash
    git fetch --all
   ```

4.**Switch to the Deployment/Prod or main branch:**
  ```bash
    git checkout Deployment/Prod
  ```
or
  ```bash
  git checkout main
  ```

5.**Install dependencies:** Ensure you are using **Node.js v18.20.0** and **npm v10.5.0** or above versions. (Use nvm or a similar version manager if needed).
  ```bash
  npm install
  ```
6.**Run the development server:**

  ```bash
  npm run dev
  ```
The application should now be running at **http://localhost:5173**.

7.**Sign in using the following credentials:**
- For _Administrator_ role:
  - Username: akash@gmail.com
  - Password: A!s2D%
- For _User_ role:
  - Username: hmalin0@sogou.com
  - Password: oK4/vV>$
- For _Unknown_ role: 
  - Username: lmattiato1f@smugmug.com
  - Password: lG23Q

You can find more accounts below:

- Link: https://github.com/akashashokkondekar/mock-graphql-server/blob/main/Utils/AppConstant.ts
- Comment: Refer **UserList**
  
 ## Package Information
```
 {
  "name": "itc-compliance-admin-portal",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.1",
    "@vue/apollo-composable": "^4.2.2",
    "flowbite": "^3.1.2",
    "pinia": "^3.0.1",
    "tailwindcss": "^4.1.1",
    "vue": "^3.5.13",
    "vue-awesome-paginate": "^1.2.0",
    "vue-router": "^4.5.0",
    "vue3-toastify": "^0.2.8"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "@vue/tsconfig": "^0.7.0",
    "typescript": "~5.7.2",
    "vite": "^6.2.0",
    "vue-tsc": "^2.2.4"
  }
}
```
## Run Both Applications (Admin Portal and GraphQL Mock Server):
Remember, both the Admin Portal and GraphQL Mock Server must be running simultaneously for the portal to function correctly.

## Additional Information:

1. Key Features and Enhancements
    -  Network Detection: Implemented a network detection feature that throws a warning to the user if they are offline or experience network issues.
    - Lazy Loading: Implemented lazy loading for the About Us and Dashboard pages to optimize initial loading time.
    - Splash Screen: Added a splash screen that displays while the app is loading, ensuring a smoother user experience.
    - Routing: Integrated Vue Router to handle route protection and redirect unauthorized users to the login page.
    - Error Handling: Created a custom "Not Found" page for users who try to access non-existent routes.
    - String Management: All string constants are managed in an AppConstant file, and utility methods are placed in the AppUtils file to ensure reusability and maintainability.
    - WCAG Standards: Followed Web Content Accessibility Guidelines (WCAG) while building the pages to ensure accessibility and inclusivity for all users.

2. Project Management & Structure
    - State Management: Used Pinia for state management to handle token storage, user session management, and form data.
    Component-Based Architecture: The application was divided into reusable components for the login form, user list, toast notifications, and others.
    - Vue Router: Used for handling route navigation and implementing route guards for protecting admin and other private routes.
    - TailwindCSS: Utilized TailwindCSS to design a fully responsive, mobile-first UI, including custom styling and utility classes.
