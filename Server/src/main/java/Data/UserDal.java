package Data;

import Models.User;
import com.google.gson.Gson;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

import java.util.ArrayList;
import java.util.List;

public class UserDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection usersCollection = stavDB.getCollection("Users");
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
}
