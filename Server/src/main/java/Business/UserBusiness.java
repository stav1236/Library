package Business;

import Data.UserDal;
import Models.Book;
import Models.User;
import com.google.gson.Gson;
import com.mongodb.DBObject;
import com.mongodb.WriteResult;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class UserBusiness {
    private UserDal dataLayer = new UserDal();

    public ArrayList<User> getAllUsers() {
        return dataLayer.findAllUsers();
    }

    public User getUserById(Integer id) {
        return dataLayer.findUserById(id);
    }

    public ArrayList<User> getBookUserList(Integer bookId) {
        List<DBObject> matches = dataLayer.findMatchList(bookId);

        ArrayList<User> users = new ArrayList<>();

        for (Object match : matches) {
            HashMap<String, Object> jsonMap = new Gson().fromJson(match.toString(), HashMap.class);
            double userId = Double.parseDouble(jsonMap.get("userId").toString());
            User user = dataLayer.findUserById((int) userId);
            users.add(user);
        }

        return users;
    }

    public boolean deleteBookFromUser(Integer userId, Integer bookId) {
        return dataLayer.removeBookFromUser(userId, bookId);
    }

    public User deleteUserById(Integer userId) {
        dataLayer.removeUserBookList(userId);
        return dataLayer.removeUserById(userId);
    }

    public void updateFavBook(Integer userId, Integer bookId) {
        dataLayer.updateFavBook(userId, bookId);
    }

    public void updateUserName(Integer userId, String name) {
        dataLayer.updateName(userId, name);
    }

    public WriteResult addBookToUser(Integer userId, Integer bookId) {
        return dataLayer.insertBookToUser(userId, bookId);
    }
}
