package Business;

import Data.UserDal;
import Models.User;

import java.util.ArrayList;

public class UserBusiness {
    private UserDal dataLayer = new UserDal();

    public ArrayList<User> getAllUsers() {
        return dataLayer.findAllUsers();
    }

}
