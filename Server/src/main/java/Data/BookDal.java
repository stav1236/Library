package Data;

import Models.Author;
import Models.Book;
import Models.User;
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

    public ArrayList<Book> findBooksByAuthor(Integer authorId) {
        BasicDBObject query = new BasicDBObject();
        query.put("authorId", authorId);
        List<DBObject> result = dataBase.findByQuery(query, booksCollection);
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
        return dataBase.findByQuery(query, usersBooksCollection);
    }

    public Book findBookById(Integer _id) {
        DBObject result = dataBase.findById(_id, booksCollection);
        return gson.fromJson(result.toString(), Book.class);
    }

    public void removeBookFromUsers(Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("bookId", bookId);
        dataBase.removeByQuery(query, usersBooksCollection);
    }

    public Book removeBookById(Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", bookId);
        DBObject result = dataBase.removeAndFindByQuery(query, booksCollection);
        return gson.fromJson(result.toString(), Book.class);
    }

    public void updateName(Integer bookId, String name) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", bookId);

        BasicDBObject newDocument = new BasicDBObject();
        newDocument.put("name", name);

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);

        dataBase.updateByQuery(query, updateObject, booksCollection);
    }

}
