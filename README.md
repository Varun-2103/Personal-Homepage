# Personal Homepage

## Author

Sai Venkatesh Varun M.M.

## Class Link

[CS5610 Web Development, Fall 2026](https://johnguerra.co/classes/webDevelopment_online_fall_2026/)

## Live Website

https://varun-2103.github.io/Personal-Homepage/

## Video Demo

YouTube demo link: 

## Screenshot of the Website

![Homepage screenshot thats used for thumbnail](images\Project-thumbnail.png)

## Project Objective

The objjective of this project is to build a personal portfolio website using HTML5, CSS3, and ES6 JavaScript modules. The website contains my education, technical skills, projects, and contact information in an easily readable format and easily accessible front end design.

## Project Description

This website is a personal homepage for Sai Venkatesh Varun M.M., a Computer Science graduate student at Northeastern University.

This website is designed in such a way that visitors can get a quick understanding of who I am, my educational background, my research projects, my technical skills and an overall summary of the technical domains I work with and am interested in. The regualar pages use a white-green colour background and content. The ai page was generated using the homepage as reference along with the markups and instructions. 

This is a front end static website, without backend and any component libraries.

## Pages Included

The project contains three HTML pages:

- `index.html` - Home page with my introduction, skills, and education
- `projects.html` - Projects page with details about my technical projects and an interactive project filter
- `contact.html` - Contact page containing my email, GitHub, and LinkedIn information

The Contact page is the AI-generated page.

## Design Document
The Design.md file is located in the root folder. It contains:
- Personal description
- User Personas
- User Stories
- Design Mockups
- Design Organisation & Summary

## Creative Addition

The Projects page includes an interactive JavaScript feature called **Project Filter**.

Visitors can filter my projects by:

- All (This is the default option)
- Data
- AI
- Software

When a category is selected, the page updates the projects listed in the live page.

The feature gives visitors a quick way to find projects related to a specific technical domain.

## Original JavaScript Functionality

The JavaScript functionality is implemented using ES6 modules in the `js/` folder.

The main JavaScript features include:

- Mobile navigation menu
- Project Signal filtering
- Button state changes
- Dynamic project filtering

The project uses JavaScript event listeners and data attributes to connect the filter buttons with the project categories.

The pages load the JavaScript module using:

```html 
<script type="module" src="js/main.js"></script>
```
## Technologies used
- HTML5
- CSS3
- JavaScript ES6 modules
- CSS Grid
- Flexbox
- Prettier
- ESLint
- GitHub Pages
- W3C Markup Validator

## File Organisation
The project files are organised in the following folder:
- **css** contains the css files
- **js** contains the js files
- **images** contains the images, favicon, the thumbnail

The rest of the files are in the **root** folder:
- **index.html**
- **project.html**
- **contact.html**
- **package.json**
- **Design.md**
- **Readme.md**
- **Licence**

## Instructions to Build and Run

1. Clone or download this repository directly from github.

2. Open the project in vscode.

3. Install the dependencies
```bash
npm install
```

4. Format the project using Prettier:

```bash
npm run format
```

5. Run ESLint:

```bash
npm run lint
```
6. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Validation
All the html files were validated using the W3C Markup Validation Service.

All the pages were without any errors.

## Accesibility and Usability
- Images include `<alt>` text when needed.
- Nav links are consistent and functional in all 3 pages.
- There are interactive controls such as `<button>` and `<a>`.
- There is also html headers like `<header>, <nav>, <main>` and so on in the html files for organisation.
- Everything is easy to read and has headings for all the necessary content.

## Styling 

## Deployment
The website is deployed successfully in the github pages.
Live Website Link:
https://varun-2103.github.io/Personal-Homepage/index.html

## Package File

The project includes the `package.json` file listing the project metadata, module type, scripts, and development dependencies.

It includes scripts for:

```bash
npm run format
```

and

```bash
npm run lint
```

## Lice

## Gen AI Usage
GenAI Usage

I used ChatGPT during the development of this project to help with the AI generated Contact page and to improve some of the wording and structure used in the project documentation.

The Contact page was created as the AI generated page required by the assignment. I reviewed the generated content and changed it to match my portfolio and my correct contact information.

I also used ChatGPT for assistance with parts of the README.

Model used:

ChatGPT, GPT-5.6 Luna

Example prompts used:

"Create a simple AI generated contact page for my personal portfolio."
"Help me create a clean contact section with email, GitHub, and LinkedIn."
"Help me describe the gen ai usage of my website."

The final website content and design were reviewed and customized by me.

## Code Review

The project includes the required files and is prepared for code review as part of the course submission.

## License

This project uses the MIT License.

The license file is included as:

- `LICENSE`

## Final Summary
All the files have been validated by W3C Markup Validation Services and the correct license has been used, all the files are functional and included in this repository.

