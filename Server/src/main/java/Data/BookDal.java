package Data;

import Models.Author;
import Models.Book;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class BookDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection booksCollection = stavDB.getCollection("Books");
    private DBCollection usersBooksCollection = stavDB.getCollection("UsersBooks");
    private Gson gson = new Gson();

    public BookDal() {
    }

    public ArrayList<Book> findAllBooks() {
        List<DBObject> result = dataBase.findALl(booksCollection);
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
        return dataBase.findByQurey(query,usersBooksCollection);
    }

    public Book findBookById(Integer _id) {
        DBObject result = dataBase.findById(_id, booksCollection);
        return gson.fromJson(result.toString(), Book.class);
    }
}
