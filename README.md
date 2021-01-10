# MyAn

<p align = "justify"> The MyAn application is free software, which aims to present annual anime, separated by the seasons. This application was developed using the React Native language.
</p>

## Instalação React Native

<p align = "justify"> The commands below are intended for users using the Linux operating system.

### NodeJS

<p align = "justify"> React Native is a JavaScript framework, so you need to install NodeJS. If you do not have NodeJS installed, use the following tutorial: <a href="https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/"> NodeJS </a>.
</p>

### JDK

<p align = "justify"> As React Native apps work for both Android and IOS, it is necessary to install the JDK. </p>

<p align = "justify"> Run in Terminal: </p>

```
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt update
sudo apt install openjdk-8-jdk
```

### Android Studio

<p align = "justify"> Android development on React Native requires Android Studio. </p>

<p align = "justify"> Run in Terminal: </p>

```
sudo snap install android-studio --classic
```

<p align = "justify"> After installing Android Studio, just follow the instructions. Android Studio itself installs the Android SDK. </p> 

### Configurando Variáveis de Ambiente

<p align = "justify"> In the terminal, run the following command: sudo (editor of your choice (gedit, vscode, nano) $ HOME / .bashrc). </p>

<p align = "justify"> Copy and paste the following commands into .bashrc: </p>

```
#ANDROID SDK ENVIRONMENT VARIABLE
export ANDROID_HOME=$HOME/Android/Sdk 
export PATH=$PATH:$ANDROID_HOME/tools 
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Watchman

<p align = "justify"> It is a tool that "observes" the code changes. Open the terminal and run the following command:</p>

```
sudo apt install -y autoconf automake build-essential libtool pkg-config libssl-dev python-dev
```

### React Native CLI

<p align = "justify"> To install React Native CLI we can use npm. At the terminal, execute the command:
 </p>

 ```
npm install -g react-native-cli
 ```

<p align = "justify"> With all the necessary dependencies installed, we go to the application. </p>

## Como Usar o MyAn

<p align = "justify"> First, "clone" the project. Open the terminal and run the following command: </p> 

```
https://github.com/KarineValenca/MyAn.git
```
<p align = "justify"> After you finish downloading the repository, run the following commands: </p>

```
cd MyAn/
npm i 
```
<p align = "justify"> Still in the MyAn folder, open two terminals and run the following commands: </p>

```
npm run android
npm start
```

<p align = "justify"> You can see the application installing on your phone too, using the USB port on your computer or notebook, just configure it when you run the command `npm run android`, open it on your device. If you have not configured this, MyAn will open in the internal emulator installed next to Android Studio. </p>

<p align = "justify"> If you have any questions, compliments or suggestions, please contact us! </p>