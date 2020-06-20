import React, { useState, useEffect } from "react";

function ResourceTypeCleanUp() {
  const [resourceType, setResourceType] = useState("post");

  useEffect(() => {
    console.log("resource changed");
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("one")}>One</button>
      <button onClick={() => setResourceType("Two")}>Two</button>
      <button onClick={() => setResourceType("Three")}>Three</button>
    </>
  );
}

export default ResourceTypeCleanUp;
