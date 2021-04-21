import { useState, useEffect } from "react";

import { Book } from "models/Book";
import { Author } from "models/Author";
import { UNDIFNED_ID, UNDIFNED_NAME, genericFetch } from "utils/utils";

const useManageBooks = () => {
  const [authors, setAuthors] = useState<Array<Author>>([]);
  const [authorBookList, setAuthorBookList] = useState<Array<Book>>([]);
  const [selectedAuthor, setSelectedAuthor] = useState({
    _id: UNDIFNED_ID,
    name: UNDIFNED_NAME,
  });

  useEffect(() => {
    getAllAuthors();
    getAuthorBookList();
  });

  const getAuthorBookList = async () => {
    if (selectedAuthor._id !== UNDIFNED_ID) {
      const bookList = await genericFetch(
        `/authorBookList/${selectedAuthor._id}`,
        "GET",
        true
      );
      setAuthorBookList(bookList);
    }
  };

  const getAllAuthors = async () => {
    if (authors.length === 0) {
      const authorList = await genericFetch("/authors", "GET", true);
      setAuthors(authorList);
    }
  };

  const getSelectedAuthor = async (id: Number) => {
    const author = await genericFetch(`/author/${id}`, "GET", true);
    setSelectedAuthor(author);
  };

  const updateAuthorName = async (authorId: number, name: string) => {
    const newAuthor = await genericFetch(
      `/update/author/${authorId}/${name}`,
      "POST",
      true
    );

    const newAuthors: Array<Author> = [];

    authors.forEach((author: Author) => {
      if (author._id === newAuthor._id) {
        author.name = newAuthor.name;
      }
      newAuthor.push(author);
    });

    setAuthors(newAuthors);
    if (authorId === selectedAuthor._id) {
      setSelectedAuthor(newAuthor);
    }
  };

  const deleteAuthor = async (authorId: number) => {
    await genericFetch(`/remove/author/${authorId}`, "POST", false);
    setAuthors(authors.filter((author: Author) => author._id !== authorId));
  };

  return {
    authors,
    selectedAuthor,
    authorBookList,
    deleteAuthor,
    getSelectedAuthor,
    updateAuthorName,
  };
};

export default useManageBooks;
