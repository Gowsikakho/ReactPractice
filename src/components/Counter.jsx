import React, { useState } from 'react';

const Counter = (props) => {
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  };

  const renderTags = () => {
    if (tags.length === 0) return <p>There is no tags!</p>;
    return <ul>{tags.map((tg) => <li key={tg}>{tg}</li>)}</ul>;
  };

  return (
    <div>
      {props.children}  {/* renders <h4>Counter Title</h4> */}
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
      {/*{tags.length === 0 && "Please create a new tag!"}
      {renderTags()}*/}
    </div>
  );
};

export default Counter;
