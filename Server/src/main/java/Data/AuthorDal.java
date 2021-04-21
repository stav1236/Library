package Data;

import Models.Author;
import Models.Book;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class AuthorDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection authorsCollection = stavDB.getCollection("Authors");
    private Gson gson = new Gson();

    public AuthorDal() {
    }

    public ArrayList<Author> findAllAuthors() {
        List<DBObject> result = dataBase.findALl(authorsCollection);
        ArrayList<Author> authors = new ArrayList<>();

        for (Object author : result) {
            Author tempAuthors = gson.fromJson(author.toString(), Author.class);
            authors.add(tempAuthors);
        }

        return authors;
    }

    public Author findAuthorById(Integer _id) {
        DBObject result = dataBase.findById(_id, authorsCollection);
        return gson.fromJson(result.toString(), Author.class);
    }

    public void updateName(Integer authorId, String name) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", authorId);

        BasicDBObject newDocument = new BasicDBObject();
        newDocument.put("name", name);

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);

        dataBase.updateByQuery(query, updateObject, authorsCollection);
    }

    public Author removeAuthorById(Integer authorId) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", authorId);
        DBObject result = dataBase.removeAndFindByQuery(query, authorsCollection);
        return gson.fromJson(result.toString(), Author.class);
    }
}
