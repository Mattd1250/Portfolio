import React, { useState, useEffect } from "react";

function ResourceType() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/${resourceType}`
    )
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  console.log(items);
  return (
    <>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default ResourceType;
