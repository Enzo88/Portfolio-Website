# Portfolio-Website
My personal website https://enzo88.github.io/


## Structure ⚓

- Navigation bar (optional)
- Blog (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (using Instagram API) (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
- Recent Projects (using GitHub API) (optional)
- Footer
  - Acknowledgements (contributors)
  - Copyrights - open source
  - (quote: Dream big, Think big)

## Setup And Deployment 🔧

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/configurations.json](./src/editable-stuff/configurations.json) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)
5. Change URL in [package.json](./package.json) file:

   ```json
   "homepage": "https://<your-username>.github.io/home"
   ```

   Or for custom deployment, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/)

6. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website run:

   ```bash
    npm run deploy
   ```

   For custom deployment, refer [pages.js](./pages.js)

   ```bash
    npm run custom-deploy
   ```

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```