package Data;

import Models.User;
import com.google.gson.Gson;
import com.mongodb.*;

import java.util.ArrayList;
import java.util.List;

public class UserDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection usersCollection = stavDB.getCollection("Users");
    private DBCollection usersBooksCollection = stavDB.getCollection("UsersBooks");
    private Gson gson = new Gson();

    public UserDal() {
    }

    public ArrayList<User> findAllUsers() {
        List<DBObject> result = dataBase.findALl(usersCollection);
        ArrayList<User> users = new ArrayList<>();

        for (Object user : result) {
            User tempUser = gson.fromJson(user.toString(), User.class);
            users.add(tempUser);
        }

        return users;
    }

    public User findUserById(Integer id) {
        DBObject result = dataBase.findById(id, usersCollection);
        return gson.fromJson(result.toString(), User.class);
    }

    public boolean removeBookFromUser(Integer userId, Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("userId", userId);
        query.put("bookId", bookId);
        DBObject result = dataBase.removeAndFindByQuery(query, usersBooksCollection);
        return gson.fromJson(result.toString(), User.class) != null;
    }

    public User removeUserById(Integer userId) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", userId);
        DBObject result = dataBase.removeAndFindByQuery(query, usersCollection);
        return gson.fromJson(result.toString(), User.class);
    }

    public void removeUserBookList(Integer userId) {
        BasicDBObject query = new BasicDBObject();
        query.put("userId", userId);
        dataBase.removeByQuery(query, usersBooksCollection);
    }

    public void updateFavBook(Integer userId, Integer bookId) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", userId);

        BasicDBObject newDocument = new BasicDBObject();
        newDocument.put("favBook", bookId);

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);

        dataBase.updateByQuery(query, updateObject, usersCollection);
    }

    public void updateName(Integer userId, String name) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", userId);

        BasicDBObject newDocument = new BasicDBObject();
        newDocument.put("name", name);

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);

        dataBase.updateByQuery(query, updateObject, usersCollection);
    }
}
