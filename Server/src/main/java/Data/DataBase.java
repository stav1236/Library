package Data;

import com.mongodb.*;

import java.util.List;

public class DataBase {
    protected MongoClient mongoClient = new MongoClient();
    protected DB stavDB = mongoClient.getDB("StavDB");

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

    public DBObject removeAndFindById(Integer id, DBCollection dbCollection) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", id);
        return dbCollection.findAndRemove(query);
    }

    public void updateByQuery(BasicDBObject query, BasicDBObject updateObject, DBCollection dbCollection) {
        dbCollection.update(query, updateObject);
    }

    public void updateByProperty(Integer id, String property, Object updateValue, DBCollection dbCollection) {
        BasicDBObject query = new BasicDBObject();
        query.put("_id", id);

        BasicDBObject newDocument = new BasicDBObject();
        newDocument.put(property, updateValue);

        BasicDBObject updateObject = new BasicDBObject();
        updateObject.put("$set", newDocument);

        dbCollection.update(query, updateObject);
    }

    public WriteResult insertOneDocument(DBObject document, DBCollection dbCollection) {
        return dbCollection.insert(document);
    }
}
