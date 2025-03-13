

const element1=React.createElement('h1',{id:'first',className:'nitin',style:{backgroundColor:'yellow',fontSize:'30px'}},"Hello Coder Army");
const element2=React.createElement('h2',{id:'second',className:'nitin',style:{backgroundColor:'pink',fontSize:'20px'}},"Hello Coders");

const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(element1);
// root.render(element2);
const div1=React.createElement('div',{},[element1,element2]);
root.render(div1);
