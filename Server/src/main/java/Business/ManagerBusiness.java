package Business;

import Data.DataBase;
import Data.ManagerDal;
import Models.Manager;

import java.util.ArrayList;

public class ManagerBusiness {
    private ManagerDal dataLayer = new ManagerDal();

    public ArrayList<Manager> getAllManagers() {
        return dataLayer.findAllManager();
    }

}
