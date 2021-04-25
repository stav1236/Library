package Data;

import Models.Author;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class AuthorDal extends DataBase {
    private DBCollection authorsCollection = stavDB.getCollection("Authors");
    private Gson gson = new Gson();

    public AuthorDal() {
    }

    public ArrayList<Author> findAllAuthors() {
        List<DBObject> result = findALl(authorsCollection);
        ArrayList<Author> authors = new ArrayList<>();

        for (Object author : result) {
            Author tempAuthors = gson.fromJson(author.toString(), Author.class);
            authors.add(tempAuthors);
        }

        return authors;
    }

    public Author findAuthorById(Integer _id) {
        DBObject result = findById(_id, authorsCollection);
        return gson.fromJson(result.toString(), Author.class);
    }

    public void updateName(Integer authorId, String name) {
        updateByProperty(authorId, "name", name, authorsCollection);
    }

    public Author removeAuthorById(Integer authorId) {
        DBObject result = removeAndFindById(authorId, authorsCollection);
        return gson.fromJson(result.toString(), Author.class);
    }
}
