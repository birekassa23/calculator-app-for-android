# Mobile Calculator App

A simple mobile calculator built using HTML, CSS, and JavaScript, designed to handle multiple-line expressions, operator corrections, and provide a clean and intuitive user interface. This app is developed with Capacitor to be deployed on mobile platforms.

## Features

* **Basic Operations**: Supports addition, subtraction, multiplication, and division.
* **Multiple-Line Expression Handling**: Supports multiple-line inputs with the latest inputs scrolling into view.
* **Operator Correction**: Handles corrections for operators like `5--+*/2`, correcting to valid operations such as `5/2`.
* **Mobile App**: Built using Capacitor for deployment to iOS/Android platforms.

## Installation

To get started with the project, clone this repository and install the necessary dependencies.

### Prerequisites

* **Node.js** (v14 or higher)
* **Capacitor CLI** (installed globally)
* **Android Studio** (for Android builds) or **Xcode** (for iOS builds)

### Steps to Set Up

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mobile-calc.git
   cd mobile-calc
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Initialize the Capacitor project:

   ```bash
   npx cap init bire-calc com.birecalc.app
   ```

4. Add the Android platform:

   ```bash
   npx cap add android
   ```

5. Run the app on Android (after installing Android Studio and setting up the environment):

   ```bash
   npx cap open android
   ```

6. For iOS, follow similar steps with Xcode if you wish to deploy to iOS.

## Development

### Building the Web Version

You can build the web version of the app for testing:

```bash
npm run build
```

Then, run the app in the browser:

```bash
npx cap copy
npx cap open android
```

### Run the Android Build

Once you have Android Studio set up, you can run the Android build:

```bash
npx cap open android
```

This will open the Android project in Android Studio, where you can run the emulator or connect your device to test the app.

### iOS Build

For iOS builds, open the project in Xcode and run it on an iOS simulator or a connected device.

## Usage

* Open the app on your device or emulator.
* Use the calculator interface to input numbers and operators.
* You can perform multiple operations at once with multiple-line support.
* Correct any operator mistakes, such as `5--+*/2` becoming `5/2`.

## License

This project is licensed under the MIT License.

## Acknowledgments

* **Capacitor** for mobile deployment
* **Node.js** for the backend logic
* **Android Studio** and **Xcode** for app development and deployment
* **HTML/CSS/JS** for the front-end

---
