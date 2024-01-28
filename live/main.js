console.log("Appollo level 2");
console.log("React =>",React);
console.log("React dom =>", ReactDOM);

const root2 = document.getElementById('root');
root2.innerText = 'Hello world';

const HelloWorld = () => {
    return React.createElement("p", {}, 'Hello world')
    
    
}

const App = () => {
    {
        return React.createElement('h1', {style : {color: "red"}}, "This is a poor react app", HelloWorld())
    }

}
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(React.createElement(App))