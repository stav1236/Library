package Data;

import com.mongodb.*;

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

    public List<DBObject> findByQuery(BasicDBObject query, DBCollection dbCollection) {
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

    public DBObject removeAndFindByQuery(BasicDBObject query, DBCollection dbCollection) {
        return dbCollection.findAndRemove(query);
    }

    public void removeByQuery(BasicDBObject query, DBCollection dbCollection) {
        dbCollection.remove(query);
    }

    public void updateByQuery(BasicDBObject query, BasicDBObject updateObject, DBCollection dbCollection) {
        dbCollection.update(query, updateObject);
    }
}
