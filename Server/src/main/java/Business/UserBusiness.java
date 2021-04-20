package Business;

import Data.UserDal;
import Models.User;
import com.mongodb.WriteResult;

import java.util.ArrayList;

public class UserBusiness {
    private UserDal dataLayer = new UserDal();

    public ArrayList<User> getAllUsers() {
        return dataLayer.findAllUsers();
    }

    public User getUserById(Integer id) {
        return dataLayer.findUserById(id);
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
