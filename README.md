# Voice Interactive Typography

This project, **Voice Interactive Typography**, is an interactive digital art installation designed for a conceptual experimental graphic design exhibition in Cairo. The installation transforms **audio input** (specifically the human **voice**) into dynamic, typographic visualizations.

Using a microphone, the system captures live **voice input**, analyzes it using a Fast Fourier Transform (FFT), and maps the **waveform** characteristics into creative, typographic designs. The project explores the intersection of sound, art, and interactive design.

## Features

- **Real-Time Interaction**: The system responds to live audio input from a microphone.
- **Typographic Art**: The captured audio is used to dynamically manipulate and design typography.
- **Waveform Visualization**: Various geometric patterns (circular, half-circle, and quarter-circle) are generated based on the voice's waveform.
- **Arabic Typography**: Custom fonts and Arabic text are integrated into the visualizations for cultural and aesthetic emphasis.
- **Animated Poster**: Scrolling text highlights notable designers and exhibition details, blending interactivity with informational content.

## Visual Presentation

For a detailed visual overview of the project, including screenshots and design concepts, [view the PDF here](https://drive.google.com/file/d/18-6VEm2Y0oN5iOWQEjnbrdIEfi2JLdxI/view?usp=sharing).

## Technical Overview

1. **Audio Capture**:
   - Utilizes the `p5.AudioIn()` object to access microphone input.
   - Processes the sound using `p5.FFT()` for waveform analysis.

2. **Waveform Visualization**:
   - Maps audio waveform data into geometric shapes (circles) for artistic representation.

3. **Typography Manipulation**:
   - Converts text to points using the `textToPoints()` function from a custom Arabic font.
   - Dynamically places visual elements at these points based on audio input.

4. **Scrolling Text**:
   - Animates exhibition information and highlights renowned designers to create a visually engaging display.

## Installation and Usage

### Prerequisites
- A browser that supports the p5.js library.
- A microphone for capturing audio input.

### Steps to Run
1. Clone or download the project files from this repository.
2. Open `index.html` in a modern web browser.
3. Allow microphone access when prompted.
4. Speak or make sounds into the microphone to interact with the typography.


## Key Technologies

- [p5.js](https://p5js.org): A JavaScript library for creative coding.
- FFT Analysis: For capturing and processing real-time audio waveforms.
- Custom Typography: Designed for dynamic, cultural expression.


## Credits

- Inspired by artists like Rafael Lozano-Hemmer and Zach Lieberman.
- Designed and developed for the AUC Creative Coding Fall 2024 class under the guidance of Dr. Jochen Braun.

---
