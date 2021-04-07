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

    public ArrayList<Book> getAllBooks() {
        return dataLayer.findAllBooks();
    }

    public ArrayList<Book> getUserBookList(Integer userId) {
        List<DBObject> matches = dataLayer.findMatchList(userId);

        ArrayList<Book> books = new ArrayList<>();


        for (Object match : matches) {
            HashMap<String, Object> jsonMap = new Gson().fromJson(match.toString(), HashMap.class);
            Integer bookId =Integer.parseInt(jsonMap.get("bookId").toString());
            Book book = dataLayer.findBookById(bookId);
            books.add(book);
        }

        return books;
    }
}
