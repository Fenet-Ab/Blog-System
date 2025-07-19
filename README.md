# Blog System

A beautiful, responsive blog platform built with **React**, **Tailwind CSS**, and **Vite**.

Users can register, log in, and manage their own blog posts with a modern UI and smooth user experience. All data is stored in the browser using localStorage—no backend required!

---

## ✨ Features

- **User Authentication:** Register and log in with localStorage-based user management.
- **Blog CRUD:** Create, edit, and delete your own blog posts.
- **Responsive Design:** Works perfectly on mobile, tablet, and desktop.
- **Modern UI:** Styled with Tailwind CSS for a clean, professional look.
- **Protected Routes:** Only logged-in users can create, edit, or delete posts.
- **Beautiful Dialogs:** Custom modal for delete confirmation.
- **Accessible:** Keyboard and screen reader friendly.
- **Instant Feedback:** All actions update the UI immediately.

---

## 🚀 Getting Started

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/blog-system.git
cd blog-system
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Run the development server**
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)
- **Tailwind CSS** (utility-first styling)
- **Vite** (fast dev/build tool)
- **React Router** (routing and protected routes)
- **Context API** (global auth state)
- **localStorage** (simulate backend for users and posts)

---

## 📁 Project Structure

```
src/
  components/    # Navbar, BlogCard, PostForm, AuthForm, etc.
  context/       # AuthContext for authentication state
  pages/         # Home, BlogList, BlogPost, CreatePost, EditPost, Login, Register
  routes/        # AppRoutes, PrivateRoute
  utils/         # storage.js (localStorage helpers)
  assets/        # edit.png, delete.png (icons)
  App.jsx
  main.jsx
  index.css
```

---

## 🧑‍💻 Usage

- **Register** a new account.
- **Log in** to your account.
- **Create** a new blog post.
- **Edit** or **delete** your own posts (with confirmation dialog).
- **View** all posts or a single post.

---

## 📝 Customization

- To change the color scheme, edit `tailwind.config.js` or use different Tailwind classes.
- To add more features (comments, likes, etc.), extend the components and storage logic.

---

## 📦 Assets

- Icons for edit and delete are in `src/assets/` and used in the UI.

---

## 🏆 Credits

- Built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Vite](https://vitejs.dev/).

---

## 📄 License<img width="1918" height<img width="1918" height="922" alt="image" src="https://github.com/user-attachments/assets/70ce020f-9af9-480b-855c-34b9c0ab2a1d" />
="922" alt="image" src="https://github.com/user-attachments/assets/26705f77-4fa8-4922-9b0f-3d2b3dfcb979" />


MIT
