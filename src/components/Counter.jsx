import React, { useState } from 'react';

const Counter = () => {
  // State using useState hook
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);

  // Handle increment
  const handleIncrement = () => {
    alert('button clicked!');
    setCount(count + 1); // update state properly
  };

  // Dynamic classes for count badge
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  // Format count display
  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  // Render tags
  const renderTags = () => {
    if (tags.length === 0) return <p>There is no tags!</p>;
    return <ul>{tags.map(tg => <li key={tg}>{tg}</li>)}</ul>;
  };

  return (
    <>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      {tags.length === 0 && "Please create a new tag!"}
      {renderTags()}
    </>
  );
};

export default Counter;
