package Data;

import Models.Author;
import com.google.gson.Gson;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

import java.util.ArrayList;
import java.util.List;

public class AuthorDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection managersCollection = stavDB.getCollection("Authors");
    private Gson gson = new Gson();

    public AuthorDal() {
    }

    public ArrayList<Author> findAllAuthors() {
        List<DBObject> result = dataBase.findALl(managersCollection);
        ArrayList<Author> authors = new ArrayList<>();

        for (Object author : result) {
            Author tempAuthors = gson.fromJson(author.toString(), Author.class);
            authors.add(tempAuthors);
        }

        return authors;
    }

    public Author findAuthorById(Integer _id) {
        DBObject result = dataBase.findById(_id, managersCollection);
        return gson.fromJson(result.toString(), Author.class);
    }
}
