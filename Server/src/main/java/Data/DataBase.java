package Data;

import Models.Manager;
import com.google.gson.Gson;

import com.mongodb.*;
import com.mongodb.util.JSON;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class DataBase {
    public DataBase() {
    }

    protected BasicDBObject ProjectionsFields(String... fields) {
        BasicDBObject fieldToProjectObject = new BasicDBObject();
        for (String field : fields) {
            fieldToProjectObject.put(field, true);
        }

        return fieldToProjectObject;
    }


    public List<DBObject> findByQurey(BasicDBObject query, DBCollection dbCollection) {
        return dbCollection.find(query).toArray();
    }

    public DBObject findById(Integer _id, DBCollection dbCollection) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", _id);
        return dbCollection.findOne(query);
    }

    public List<DBObject> findALl(DBCollection dbCollection) {
        return dbCollection.find().toArray();
    }


}
