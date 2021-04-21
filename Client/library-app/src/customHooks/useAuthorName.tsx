import { useState, useEffect } from "react";
import { genericFetch } from "utils/utils";

const useAuthorName = (authorId: Number) => {
  const [authorName, setAuthorName] = useState("");

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
