# Drum Machine 🚀

## 📝 Implemented the Drum Machine functionality with clickable drum pads that play sounds when pressed or when corresponding keys are pressed. Each drum pad displays its respective key and sound, and the display shows the sound name when a pad is activated.


```css
body::before,
body::after {
  content: '';
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 0.8;
}
```

```javascript
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key.toUpperCase() === keyTrigger) {
        handleClick();
      }
    },
    [keyTrigger, handleClick],
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

```

## Demo 📸

[Live Demo](https://drum-machine--neon-starburst-037542.netlify.app/)

![Screenshot](./src/components/Screenshot%202024-09-06%20142126.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript
- React

## Installation 💻

```bash
1: Clone the Repository:
git clone https://github.com/elhamy786/drum.machine/tree/drum.machine
```

```bash
2: Navigate to the Project Directory:
cd drum.machine
```

```bash
3: Open the index.html , App.js , App.css and another Files in Your Browser.
```


## Usage 🎯

```bash
# Clone the repo to your local machine.
# Install dependencies using npm install or yarn install.
# Run the project with npm start or yarn start.
# Write markdown and see the live preview instantly.
# Customize the preview using CSS and build for production if needed.
```

## Features ⭐

- Real-Time Sound Playback: Each drum pad plays a unique sound in real-time with no delay.
- Sound Display: The name of the sound being played is displayed when a drum pad is activated.
- Responsive Drum Pads: Drum pads can be activated both by clicking or pressing corresponding keyboard keys.

## Author 👩‍💻

- [Linkedin](https://www.linkedin.com/in/elham-afzali-05326130b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
- [Email](elham.afzali1383@gmail.com)

## Contributing 🤝

To contribute, submit bug reports, feature requests, or pull requests via the GitHub repository issues and pull requests tabs.