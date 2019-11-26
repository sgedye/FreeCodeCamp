//Create a Stateless Functional Component
const MyComponent = () => {
  return (
    <div>This is a string of text</div>
  );
};

//Create a Component with Composition (a child component) and render it to an HTML div (with ID: idOfAnHtmlElement)
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
ReactDOM.render(<ParentComponent />, document.getElementById("idOfAnHtmlElement"));
