package Data;

import Models.Author;
import Models.Book;
import Models.User;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class BookDal extends DataBase {
    private DBCollection booksCollection = stavDB.getCollection("Books");
    private DBCollection usersBooksCollection = stavDB.getCollection("UsersBooks");
    private Gson gson = new Gson();

    public BookDal() {
    }

    public ArrayList<Book> findAllBooks() {
        List<DBObject> result = findALl(booksCollection);
        ArrayList<Book> books = new ArrayList<>();

        for (Object book : result) {
            Book tempBook = gson.fromJson(book.toString(), Book.class);
            books.add(tempBook);
        }

        return books;
    }

    public ArrayList<Book> findBooksByAuthor(Integer authorId) {
        BasicDBObject query = new BasicDBObject();
        query.put("authorId", authorId);
        List<DBObject> result = findByQuery(query, booksCollection);
        ArrayList<Book> books = new ArrayList<>();

        for (Object book : result) {
            Book tempBook = gson.fromJson(book.toString(), Book.class);
            books.add(tempBook);
        }

        return books;
    }

    public List<DBObject> findMatchList(Integer userId) {
        BasicDBObject query = new BasicDBObject();
        query.put("userId", userId);
        return findByQuery(query, usersBooksCollection);
    }

    public Book findBookById(Integer _id) {
        DBObject result = findById(_id, booksCollection);
        return gson.fromJson(result.toString(), Book.class);
    }

    public void removeBookFromUsers(Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("bookId", bookId);
        removeByQuery(query, usersBooksCollection);
    }

    public Book removeBookById(Integer bookId) {
        DBObject result = removeAndFindById(bookId, booksCollection);
        return gson.fromJson(result.toString(), Book.class);
    }

    public void updateName(Integer bookId, String name) {
        updateByProperty(bookId, "name", name, booksCollection);
    }

}
