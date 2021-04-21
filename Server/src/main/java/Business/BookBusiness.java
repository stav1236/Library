package Business;

import Data.BookDal;
import Models.Book;
import com.google.gson.Gson;
import com.mongodb.DBObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class BookBusiness {
    private BookDal dataLayer = new BookDal();

    public Book getBookById(Integer id) {
        return dataLayer.findBookById(id);
    }

    public String getBookNameById(Integer bookId) {
        return dataLayer.findBookById(bookId).getName();
    }

    public ArrayList<Book> getAllBooks() {
        return dataLayer.findAllBooks();
    }

    public ArrayList<Book> getUserBookList(Integer userId) {
        List<DBObject> matches = dataLayer.findMatchList(userId);

        ArrayList<Book> books = new ArrayList<>();


        for (Object match : matches) {
            HashMap<String, Object> jsonMap = new Gson().fromJson(match.toString(), HashMap.class);
            double bookId = Double.parseDouble(jsonMap.get("bookId").toString());
            Book book = dataLayer.findBookById((int) bookId);
            books.add(book);
        }

        return books;
    }

    public Book deleteBookById(Integer bookId) {
        dataLayer.removeBookFromUsers(bookId);
        return dataLayer.removeBookById(bookId);
    }

    public void updateBookName(Integer bookId, String name) {
        dataLayer.updateName(bookId, name);
    }

}
