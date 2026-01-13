# Employee Management System

A modern, full-featured Employee Management System built with React.js. This application provides a complete solution for managing employee data with authentication, CRUD operations, search, filtering, and a beautiful user interface.

## 📋 Project Overview

This Employee Management System is a single-page application (SPA) that allows authorized users to:

- **Authenticate** using a login system (mock authentication)
- **View** a comprehensive dashboard with employee statistics
- **Manage** employee records with full CRUD operations:
  - Add new employees
  - Edit existing employee information
  - Delete employees (with confirmation)
  - Toggle active/inactive status
- **Search** employees by name
- **Filter** employees by gender and active/inactive status
- **Print** employee lists
- **Upload** and preview profile images

The application features a modern, responsive design with a clean UI/UX, proper form validation, and persistent data storage using localStorage.

## 🛠 Tech Stack Used

### Core Technologies
- **React.js** (v19.2.3) - JavaScript library for building user interfaces
- **React Router DOM** (v7.12.0) - Client-side routing and navigation
- **React Scripts** (v5.0.1) - Build tools and configuration for React apps

### State Management
- **React Context API** - For global state management (Authentication & Employee data)
- **React Hooks** - useState, useEffect, useContext for component state and side effects

### Styling
- **CSS3** - Custom CSS with modern design principles
- **CSS Modules** - Component-scoped styling
- **Responsive Design** - Mobile-first approach with media queries

### Data Persistence
- **localStorage** - Browser-based data storage for employee records and authentication state

### Development Tools
- **ESLint** - Code linting and quality assurance
- **Webpack** - Module bundler (via react-scripts)
- **Babel** - JavaScript compiler (via react-scripts)

## 🚀 Steps to Run the Project Locally

### Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd xpert-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all required packages including React, React Router, and other dependencies.

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will automatically open in your browser at `http://localhost:3000`

4. **Login to the application**
   - Use **any username and password** to login (mock authentication)
   - After successful login, you'll be redirected to the dashboard

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

### Troubleshooting

If you encounter module resolution errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

For Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

## 🎨 Features & Functionality

### Authentication
- Login page with username/password fields
- Mock authentication (accepts any credentials)
- Protected routes - dashboard requires authentication
- Session persistence using localStorage
- Automatic redirects for authenticated/unauthenticated users

### Dashboard
- **Summary Cards**: Displays total, active, and inactive employee counts
- **Add Employee Button**: Quick access to add new employees
- **Search & Filter Bar**: Real-time search and filtering capabilities
- **Employee Table**: Comprehensive list view with all employee details

### Employee Management
- **View**: Table format with all employee information
- **Add**: Modal form with validation
- **Edit**: Pre-populated form for updating employee data
- **Delete**: Confirmation dialog before deletion
- **Toggle Status**: Switch to activate/deactivate employees
- **Print**: Print-friendly employee list

### Search & Filter
- **Search by Name**: Case-insensitive real-time search
- **Filter by Gender**: All, Male, Female, Other
- **Filter by Status**: All, Active, Inactive
- **Combined Filtering**: All filters work together

### Form Features
- **Validation**: Required fields, date validation, image validation
- **Image Upload**: File upload or URL input
- **Image Preview**: Preview before saving
- **Error Handling**: Clear error messages for invalid inputs

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EmployeeForm.js   # Add/Edit employee form
│   ├── EmployeeList.js   # Employee table/list component
│   ├── EmployeeRow.js    # Individual employee row
│   ├── ProtectedRoute.js # Route protection component
│   └── SearchFilter.js   # Search and filter component
├── context/             # React Context providers
│   ├── AuthContext.js    # Authentication state management
│   └── EmployeeContext.js # Employee data management
├── pages/               # Page components
│   ├── Dashboard.js      # Main dashboard page
│   └── Login.js          # Login page
├── App.js               # Main app component with routing
├── App.css              # App-level styles
├── index.js             # Application entry point
└── index.css            # Global styles
```

## 💡 Assumptions & Design Decisions

### Authentication
- **Mock Authentication**: Implemented mock authentication that accepts any username/password combination. This was chosen for simplicity and to focus on the core employee management features.
- **Session Persistence**: Authentication state is stored in localStorage to persist across browser sessions.
- **Protected Routes**: Dashboard and other protected pages automatically redirect to login if user is not authenticated.

### Data Management
- **localStorage**: Chosen over a backend API or JSON Server for simplicity and to demonstrate frontend capabilities. Data persists in the browser's localStorage.
- **Mock Data Generation**: On first load, the application generates 10 sample employees if no data exists, providing immediate visual feedback.
- **Data Structure**: Employee objects include: id, fullName, gender, dateOfBirth, state, profileImage, and active status.

### UI/UX Design Decisions
- **Color Scheme**: Purple/blue gradient theme chosen for a modern, professional appearance.
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and mobile devices.
- **Modal Forms**: Employee add/edit forms use modal overlays to maintain context and improve UX.
- **Toggle Switches**: Active/inactive status uses toggle switches for intuitive interaction.
- **Empty States**: Graceful handling of empty search results with informative messages.
- **Loading States**: Smooth transitions and hover effects for better user feedback.

### Component Architecture
- **Context API**: Used for global state management instead of Redux to keep the solution lightweight and appropriate for the project scope.
- **Functional Components**: All components use functional components with hooks (modern React pattern).
- **Component Separation**: Clear separation of concerns with dedicated components for forms, lists, and filters.
- **Reusable Components**: EmployeeForm is reused for both add and edit operations.

### Form Validation
- **Client-side Validation**: All validation is performed on the client side with immediate feedback.
- **Required Fields**: Full name, date of birth, and state are required fields.
- **Date Validation**: Prevents future dates for date of birth.
- **Image Handling**: Supports both file upload and URL input for profile images.

### Browser Compatibility
- **Modern Browsers**: Designed for modern browsers with ES6+ support.
- **Print Functionality**: Includes print-specific CSS for clean employee list printing.

### Performance Considerations
- **Local Storage**: Efficient data storage and retrieval using localStorage.
- **Component Optimization**: Components are structured to minimize unnecessary re-renders.
- **Image Optimization**: Profile images are stored as base64 or URLs for quick loading.

## 📝 Notes

- The application uses mock authentication - any username/password combination will work.
- All employee data is stored in the browser's localStorage and will persist until cleared.
- Profile images can be uploaded as files or provided as URLs.
- The print functionality hides UI elements and shows only the employee table.
- The application is fully responsive and works on desktop, tablet, and mobile devices.

## 🔮 Future Enhancements

Potential improvements that could be added:
- Backend API integration (REST or GraphQL)
- User authentication with JWT tokens
- Pagination for large employee lists
- Export functionality (CSV, Excel)
- Advanced filtering options
- Employee profile pages
- Activity logs/audit trail
- Bulk operations
- Image compression for uploads
- Dark mode theme

## 📄 License

This project is created as an assignment and is for demonstration purposes.

---

**Developed with ❤️ using React.js**
