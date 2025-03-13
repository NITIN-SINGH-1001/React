

const element=React.createElement('h1',{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root')); // this was valid till react17

const reactRoot= ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(element);