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

//Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};
class Calendar extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
}; //Return What date is it? The current date is: Thu Nov 28 2019 11:52:01 GMT+1100 (AEST)


//Pass an array as props.
const List = (props) => {
  return <p>{props.task.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today:</h2>
        <List task={['eat cake', 'buy pizza', 'smell the roses']}     />
        <h2>Tomorrow:</h2>
        <List task={['jump', 'hop', 'walk', 'run', 'fight!']}/>
      </div>
    );
  }
}; //Return To Do Lists \n Today: eat cake, buy pizza, smell the roses \n Tomorrow: jump, hop, walk, run, fight!


//Declaring defaul values
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
ShoppingCart.defaultProps = { items: 0 };


class CampSite extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div><Camper/></div>
    );
  }
};
const Camper = (props) => <p>{props.name}</p>
Camper.defaultProps = { name: "CamperBot" }
Camper.propTypes = { name: PropTypes.string.isRequired }


//Render the state
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'freeCodeCamp' }
  }
  render() {
    const name = this.state.name;
    return (
      <div><h1>{name}</h1></div>
    );
  }
};


//Set this.State()
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Initial State' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() { this.setState({ name: 'React Rocks!'});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};


// Toggle visibility
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};


// Button Functionality
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() { this.setState(state => ({ count: state.count + 1 })); }
  decrement() { this.setState(state => ({ count: state.count - 1 })); }
  reset() { this.setState({ count: 0 }); }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};


// Rendering a form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '', submit: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault(); //Prevent page from refreshing
    this.setState({ submit: this.state.input });
    this.setState({ input: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};


// Render Conditionally from Props
class Results extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <h1>{this.props.fiftyFifty}</h1>
    )
  };
};
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {expression ? <Results fiftyFifty="You Win!"/> : <Results fiftyFifty="You Lose!"/>}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
