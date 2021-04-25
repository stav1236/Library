package Data;

import Models.User;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class UserDal extends DataBase {
    private DBCollection usersCollection = stavDB.getCollection("Users");
    private DBCollection usersBooksCollection = stavDB.getCollection("UsersBooks");
    private Gson gson = new Gson();

    public UserDal() {
    }

    public ArrayList<User> findAllUsers() {
        List<DBObject> result = findALl(usersCollection);
        ArrayList<User> users = new ArrayList<>();

        for (Object user : result) {
            User tempUser = gson.fromJson(user.toString(), User.class);
            users.add(tempUser);
        }

        return users;
    }

    public User findUserById(Integer id) {
        DBObject result = findById(id, usersCollection);
        return gson.fromJson(result.toString(), User.class);
    }

    public List<DBObject> findMatchList(Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("bookId", bookId);
        return findByQuery(query, usersBooksCollection);
    }

    public boolean removeBookFromUser(Integer userId, Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("userId", userId);
        query.put("bookId", bookId);
        DBObject result = removeAndFindByQuery(query, usersBooksCollection);
        return gson.fromJson(result.toString(), User.class) != null;
    }

    public User removeUserById(Integer userId) {
        DBObject result = removeAndFindById(userId, usersCollection);
        return gson.fromJson(result.toString(), User.class);
    }

    public void removeUserBookList(Integer userId) {
        BasicDBObject query = new BasicDBObject();
        query.put("userId", userId);
        removeByQuery(query, usersBooksCollection);
    }

    public void updateFavBook(Integer userId, Integer bookId) {
        updateByProperty(userId, "favBook", bookId, usersCollection);
    }

    public void updateName(Integer userId, String name) {
        updateByProperty(userId, "name", name, usersCollection);
    }

    public WriteResult insertBookToUser(Integer userId, Integer bookId) {
        DBObject newDocument = new BasicDBObject();
        newDocument.put("userId", userId);
        newDocument.put("bookId", bookId);

        return insertOneDocument(newDocument, usersBooksCollection);
    }
}
