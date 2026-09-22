# Shrink and Grow Web Project

This is a small, playful project for experimenting with HTML, CSS, and JavaScript.

We’ll place a Ant-Man on top of a background and use JavaScript to make the character shrink, grow, and return to its original size. No previous coding experience is expected. The goal is to explore, try things, and help each other when something behaves unexpectedly.

Everything runs in a web browser, so there’s no software to install.

## 1. Make your own copy

While signed in to GitHub:

1. Select the green **Use this template** button near the top of this page.
2. Select **Create a new repository**.
3. Choose your GitHub account as the owner.
4. Give your copy a name, such as:

```text
shrink-and-grow-project
```

5. Choose **Public** or **Private**.
6. Select **Create repository**.

You now have your own copy. Any changes you make will only affect your version.

## 2. Open the project in Codespaces

From your new repository:

1. Select the green **Code** button.
2. Select the **Codespaces** tab.
3. Select **Create codespace on main**.
4. Give GitHub a moment to prepare the workspace.

A browser-based version of Visual Studio Code will open. This is where we’ll edit and run the project.

## 3. Get familiar with the files

The project files appear on the left side of the workspace:

- `index.html` contains the content and structure of the page.
- `style.css` controls the appearance, background, positioning, and animation.
- `script.js` controls what happens when the buttons are pressed.
- `images` contains the background and character images.

Select a filename to open it.

You’ll find numbered `TODO` comments throughout the starter code. We can work through these together and compare what happens as we make changes.

## 4. Start the website

Open a terminal inside Codespaces:

1. Open the menu in the upper-left corner.
2. Select **Terminal → New Terminal**.
3. Click inside the terminal at the bottom of the workspace.
4. Type the following command:

```bash
python3 -m http.server 8000
```

5. Press **Enter**.
6. When GitHub says that port `8000` is available, select **Open in Browser**.

The project will open in another browser tab.

If the message doesn’t appear:

1. Open the **Ports** tab near the terminal.
2. Find port `8000`.
3. Select the globe or open-browser icon beside it.

Keep the code and website open in separate tabs.

To stop the website later, click inside the terminal and press `Ctrl + C`.

## 5. Make and view changes

After changing a file, save it:

- Mac: `Command + S`
- Windows: `Ctrl + S`

Return to the website tab and refresh the page to see the result.

Our basic workflow is:

1. Change something.
2. Save the file.
3. Refresh the website.
4. See what happened.
5. Adjust it and try again.

Unexpected results are part of the process. If something breaks, we can look at it together.

## 6. Use your own images

PNG, JPG, and WebP images all work in this project.

To upload an image:

1. Find the `images` folder in the file list.
2. Right-click the folder.
3. Select **Upload**.
4. Choose an image from your device.
5. Wait for it to appear inside the folder.

Simple lowercase filenames are easiest to work with:

```text
background.webp
character.png
```

Avoid spaces in filenames. The name used in the code must exactly match the uploaded filename, including capitalization.

For example:

```css
background-image: url("images/background.webp");
```

And:

```html
<img id="character" src="images/character.png" alt="A shrinking character">
```

## 7. Save your progress to GitHub

Pressing `Command + S` or `Ctrl + S` saves the file inside the Codespace. To preserve a completed step in your GitHub repository:

1. Select the **Source Control** icon on the left. It looks like a branching line.
2. Enter a short description of what you changed, such as:

```text
Add my background image
```

3. Select **Commit**.
4. Select **Sync Changes** or **Push** if that option appears.

A commit is simply a saved checkpoint. It gives you a place to return to if a later experiment doesn’t work as expected.

## Returning to the project later

1. Sign in to [GitHub](https://github.com).
2. Open the repository you created from this template.
3. Select **Code → Codespaces**.
4. Select your existing Codespace.

You can also find all your Codespaces by selecting your profile picture and choosing **Your codespaces**.

## A few things to try

Once the basic project is working, try changing:

- How quickly the character grows or shrinks
- The smallest or largest allowed size
- The character’s starting position
- The background image
- The button labels and colors
- The animation speed
- The character image

There isn’t one correct finished version. The fun part is experimenting and seeing how small changes to HTML, CSS, and JavaScript affect what happens on the page.
