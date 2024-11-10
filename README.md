# we use Vite to create react : https://vite.dev/guide/

- go to terminal (shift+ctrl+ ~) : npm create vite@latest

# we use tailwinds to styles our course :

- installations :
  . npm install -D tailwindcss
  . npx tailwindcss init

- in tailwind.config.js :

    export default {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {
    fontFamily: {
    sans: ['sans-serif'],
    },
    },
    },
    plugins: [],
    }

- in index.css :

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

# we use flowbite to import design UI dea mean srab

- installation : npm install flowbite
- in tailwind.config.js :
    export default {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"    // we add flowbite
    ],
    theme: {
    extend: {
    fontFamily: {
    sans: ['sans-serif'],
    },
    },
    },
    plugins: [
    require('flowbite/plugin')           // add flowbite  to our plugin
    ],
    }


# everything will run in index.html and use react-dom to intereact with browser

- react : build UI
- rreact-dom : to run in the browser
- rootElement : will run in the root
- root.render() : it will render everything that we build by using react component

# we need node-modules to install dependencies :

- npm install (install mode-modules)
- uninstall : npm uninstall #name-dependency

# Strict Mode :

- check error in compile time

# meaning of words

- what is component ? Component is piece of code that ផ្គុំគ្នា that create jenh jea Ui
  .Class component
  .funtional component

- component : must start with the capital letters
- find : return as items
- filters : return as array
- () => :  callBack function : is a function passed as an argument to another function or component.

# shortcut

- to create function : rfce
- to create arrow function : rafce (most prefered)
- <></> || <React.Fragment><Reactt.Fragment/> : this is called react fragment

# Props : think of it as a parameter (need value to bos tomlai oy)

- we use props as a parameter to pass object
- props is like attribute of html or parameter of javascript
- children : is a children props and it is special, we can't use anything beside the word children

# Detructuring

- const {name , img, title } = props;
- or we can : const Poster = ({ name, img , title }) => { return ()};
- we don't have to use like props.name, props.title something like that (X)

# to loop over array , we use map() method

- it need to two value
  . one is for each items of array
  . another one if index

# events

- onChange : used to handles changes inn form elements like <input> , <textArea> and so on
- onChangeHandler : used to handle onChange
- onClick : mostly we used it on button


# react useState & hook

- State : represent data that can change over timmes annd need to be tracked within a components. it manage Dynamic data , trigger re-render, handle user interactions. 

- setState : we use to update the value of the state 
   . example : const[count, setCount] = useState();
   . function : function handleState(){
       setCounnt(10);     // we change value to 10 
   }

- hook we can not use outside functional component. 

-  const [value, setValue] = useState("");
    -> useState("")  : ចាំទទួលយកតម្លៃដែលជា string

