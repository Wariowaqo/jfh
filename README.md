---
readme: |
  # Journey for Hope

  **Journey for Hope** is a fully responsive website designed to empower communities and inspire positive change. The site features three main pages—**Home**, **About Us**, and **Contact Us**—built using HTML5, CSS3 (without frameworks), and vanilla JavaScript. The design is clean, modern, and uses Flexbox and CSS Grid to ensure a uniform experience on desktop, tablet, and mobile devices.

  ## Table of Contents

  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Setup and Usage](#setup-and-usage)
    - [Running Locally](#running-locally)
    - [Deploying with GitHub Pages](#deploying-with-github-pages)
  - [Environment Variables and Secrets](#environment-variables-and-secrets)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

  ## Project Overview

  **Journey for Hope** is a portfolio project that demonstrates how to build a fully responsive website with modern front-end technologies. The site is designed to be accessible on all devices and includes:
  - A hero section with background images and overlay text.
  - A clear "About Us" page with a timeline.
  - A "Contact Us" page with a functioning form integrated with a free and open-source Supabase database.

  ## Features

  - **Responsive Design**: Uses Flexbox and CSS Grid to achieve a responsive layout on desktops, tablets, and mobile devices.
  - **Modern UI**: Clean and modern design using soft, uplifting colors and Google Fonts (Poppins).
  - **Multiple Pages**: Features Home, About Us, and Contact Us pages.
  - **Interactive Elements**:
    - Hero section with background image and overlay text.
    - Buttons for primary navigation to relevant pages.
    - Hamburger menu for mobile view navigation.
    - Smooth scrolling for in-page anchor links.
    - Fade-in animations on scroll using the Intersection Observer API.
  - **Contact Form**:
    - Built-in form validations.
    - Integrated with Supabase to store contact form submissions.
  - **Social Media Links**:
    - Footer contains social media icons (via Font Awesome) that link to your social accounts.

  ## Technologies Used

  - **HTML5 & CSS3**: For structuring and styling the website.
  - **Vanilla JavaScript**: For adding interactivity (hamburger menu, smooth scrolling, fade-in animations, and form submission handling).
  - **Supabase**: A free, open-source backend/database service for storing contact form submissions.
  - **Font Awesome v4**: For social media icons.
  - **Git & GitHub**: For version control and project hosting.

  ## Project Structure

  Below is a sample file structure for the project **journey-for-hope**:
  journey-for-hope/ ├── index.html # Home page ├── about.html # About Us page ├── contact.html # Contact Us page ├── style.css # Main stylesheet ├── script.js # JavaScript (interactivity and Supabase integration) ├── images/ # Folder for images (backgrounds, icons, etc.) ├── .gitignore # Git ignore file (e.g., environment variables) └── README.md # This README file


## Setup and Usage

### Running Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Wariowaqo/jfh.git
   cd jfh
   ```
2. **Open the Project in Your Code Editor**:
   Use VS Code or any other editor to view and modify the files.
3. **Open in Browser**:
   Simply open `index.html` in your browser. For live reloading, consider using a local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Deploying with GitHub Pages

1. **Push Your Local Repository to GitHub**  
   (If you haven’t already done so.)

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click the **Settings** tab.
   - Scroll down to the **Pages** section.
   - Under **Source**, choose the branch (`main`) and folder (`/ (root)`) that contains your `index.html`.
   - Click **Save**.
   - After a few moments, GitHub will display a live URL such as:
     ```
     https://Wariowaqo.github.io/jfh/
     ```

3. **Visit the URL**:
   Open the provided URL in your browser to see the live site.

## Environment Variables and Secrets

- **Supabase Credentials**:
  - The project uses Supabase to store contact form submissions. The Supabase anon key is intended for client-side usage and is protected via Row Level Security.
  - If you need to store sensitive credentials (like a Supabase service key), create a `.env` file and add it to `.gitignore` so it isn’t tracked by Git.

  Example `.gitignore` entry:
  ```
  .env
  ```

## Contributing

Contributions are welcome! If you have ideas, improvements, or bug fixes, please fork the repository and open a pull request.

1. Fork the repo.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push -u origin feature/YourFeature`
5. Open a pull request.

## License

This project is open-source and free to use.  
*(Include your chosen license here, such as MIT License or Apache License.)*

## Acknowledgements

- [Vite](https://vitejs.dev/) for fast development and build tooling.
- [Supabase](https://supabase.com/) for their open-source database backend.
- [Font Awesome v4](https://fontawesome.com/v4/icons/) for social media icons.
- The open-source community for continuous support and resources.
...
  
