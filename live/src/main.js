console.log("Appollo level 2");
console.log("React =>",React);
console.log("React dom =>", ReactDOM);

const root2 = document.getElementById('root');
root2.innerText = 'Hello world';

import { HelloWorld, anotherHello } from "./another";

const App = () => {
    {
        return React.createElement(
            'h1',
            { style: { color: 'red' } },
            'This is a simple react app',
            HelloWorld(),
            anotherHello()
        )
    }

}

// const HelloWorld = () => {
//     return <h1> Hello World</h1>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(React.createElement(App))