# Linux Terminal Portfolio

An interactive, Linux-inspired web terminal built to present my cybersecurity, DevSecOps and cloud engineering background.

The portfolio behaves like a small command-line interface: visitors can type commands, browse command history and use Tab completion to discover the available sections.

## Features

- Minimal Linux terminal interface
- Responsive layout for desktop and mobile
- Keyboard-driven navigation
- Command auto-completion with `Tab`
- Command history with `↑` and `↓`
- Interactive portfolio sections
- Direct résumé, email and social-profile links
- No framework or build step required

## Available commands

| Command | Description |
| --- | --- |
| `help` / `all` | Display all available commands |
| `about` | Read a short introduction |
| `experience` | View professional experience |
| `projects` | Explore selected technical projects |
| `skills` | View the technical toolkit |
| `education` | View academic background |
| `certifications` | View certifications and learning paths |
| `languages` | View spoken languages |
| `extracurricular` | View community and leadership activities |
| `contact` | Display contact and social links |
| `resume` | Open the résumé in a new tab |
| `clear` | Clear the terminal output |

## Keyboard controls

- Start typing a command and press `Tab` to complete it.
- Press `↑` or `↓` to navigate previously entered commands.
- Press `Enter` to execute the current command.

For example:

```text
hasnae@portfolio:~$ pro<Tab>
hasnae@portfolio:~$ projects
```

## Run locally

Clone the repository:

```bash
git clone https://github.com/hsinaa/hsina-s-Web-Terminal-Portfolio.git
cd hsina-s-Web-Terminal-Portfolio
```

You can open `index.html` directly in a browser, or serve the directory with a small local server:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html    # Terminal markup
├── styles.css    # Linux terminal styling and responsive layout
├── script.js     # Commands, history and Tab completion
├── resume.pdf    # Downloadable résumé
└── README.md
```

## Customization

- Edit command responses in the `commands` object inside `script.js`.
- Adjust terminal colors and dimensions through the variables at the top of `styles.css`.
- Replace `resume.pdf` with an updated résumé while keeping the same filename.
- Update the page title and welcome message in `index.html`.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript

## Author

**Hasnae Amansag** — DevSecOps, Cloud & Cybersecurity Engineer

- [GitHub](https://github.com/hsinaa)
- [LinkedIn](https://www.linkedin.com/in/hasnae-amansag-b7ba81214)
- [Email](mailto:amansag.hasnae@gmail.com)

## License

This project is available for personal and educational use. Portfolio content and personal information remain the property of the author.
