package Business;

import Data.AuthorDal;
import Data.BookDal;
import Models.Author;
import Models.Book;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class AuthorBusiness {
    private AuthorDal dataLayer = new AuthorDal();
    private BookDal bookDataLayer = new BookDal();

    public Author getAuthorById(Integer id) {
        return dataLayer.findAuthorById(id);
    }

    public ArrayList<Author> getAllAuthors() {
        return dataLayer.findAllAuthors();
    }

    public String getAuthorsNameById(Integer _id) {
        return dataLayer.findAuthorById(_id).getName();
    }

    public void updateAuthorName(Integer authorId, String name) {
        dataLayer.updateName(authorId, name);
    }

    public Author deleteAuthorById(Integer authorId) {
        List<Book> authorBooks = bookDataLayer.findBooksByAuthor(authorId);

        for (Book book : authorBooks) {
            Integer bookId = book.getId();
            bookDataLayer.removeBookById(bookId);
        }
        return dataLayer.removeAuthorById(authorId);
    }

}
