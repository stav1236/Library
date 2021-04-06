package Data;

import Models.Manager;
import com.google.gson.Gson;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;

import java.util.ArrayList;
import java.util.List;

public class ManagerDal {
    private DataBase dataBase = new DataBase();
    private MongoClient mongoClient = new MongoClient();
    private DB stavDB = mongoClient.getDB("StavDB");
    private DBCollection managersCollection = stavDB.getCollection("Managers");
    private Gson gson = new Gson();

    public ManagerDal() {
    }

    public ArrayList<Manager> findAllManager() {
        List<DBObject> result = dataBase.findALl(managersCollection);
        ArrayList<Manager> managers = new ArrayList<>();

        for (Object manager : result) {
            Manager tempManager = gson.fromJson(manager.toString(), Manager.class);
            managers.add(tempManager);
        }

        return managers;
    }

}
