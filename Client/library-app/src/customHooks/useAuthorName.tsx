import { useState, useEffect } from "react";

import { genericFetch, UNDIFNED_NAME } from "utils/utils";

const useAuthorName = (authorId: Number) => {
  const [authorName, setAuthorName] = useState(UNDIFNED_NAME);

  useEffect(() => {
    getAuthorName();
  });

  const getAuthorName = async () => {
    const name = await genericFetch(`/author/name/${authorId}`, "GET", true);
    setAuthorName(name);
  };

  return authorName;
};

export default useAuthorName;
