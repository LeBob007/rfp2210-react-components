// TODO
const { useState } = React;

const Items = (props) => {
  const [hoverOver, setHoverOver] = useState(false);

  const style = {
    fontWeight: hoverOver ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseOver={() => setHoverOver(!hoverOver)}>
      {props.groceryItem}
    </li>
  )

};

const GroceryListItems = (props) => (
  <ul>
    {props.groceryItems.map((groceryItem) => (
      <Items groceryItem={groceryItem}/>
    ))}
  </ul>
);

const GroceryList = () => (
  <div>
    <GroceryListItems groceryItems={['Apple', 'Orange']} />
  </div>
);






ReactDOM.render(<GroceryList />, document.getElementById("app"));
