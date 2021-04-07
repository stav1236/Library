package Business;

import Data.AuthorDal;
import Models.Author;

import java.util.ArrayList;

public class AuthorBusiness {
    private AuthorDal dataLayer = new AuthorDal();

    public ArrayList<Author> getAllAuthors() {
        return dataLayer.findAllAuthors();
    }

    public String getAuthorsNameById(Integer _id) {
        return dataLayer.findAuthorById(_id).getName();
    }
}
