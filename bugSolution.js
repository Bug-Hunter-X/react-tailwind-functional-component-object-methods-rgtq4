```javascript
// Solution 1: Use a regular function

const myObject = {
  myMethod: function() {
    console.log('This is my method!');
  },
};

// Solution 2: Bind the context of the arrow function

const myObject = {
  myMethod: () => {
    console.log('This is my method!');
  },
};

const MyComponent = () => {
  return (
    <div className="bg-gray-200 p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={myObject.myMethod.bind(myObject)}
      >
        Click me!
      </button>
    </div>
  );
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));
```