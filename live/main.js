console.log("Appollo level 2");
console.log("React =>",React);
console.log("React dom =>", ReactDOM);

const root2 = document.getElementById('root');
root2.innerText = 'Hello world';

const App = React.createElement('h1', {style : {color: "red"}}, "Hello world3")

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(App)