package Business;

import Data.UserDal;
import Models.User;

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

    public void updateFavBook(Integer userId,Integer bookId) {
        dataLayer.updateFavBook(userId,bookId);
    }

}
