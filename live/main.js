console.log("Appollo level 2");
console.log("React =>",React);
console.log("React dom =>", ReactDOM);

const root2 = document.getElementById('root');
root2.innerText = 'Hello world';

const HelloWorld = () => {
    return <h1> Hello World</h1>
}

const App = () => {
    return(
    <React.Fragment>
        <div>This is poor react app</div>
        <HelloWorld/>
    </React.Fragment>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(<App/>)