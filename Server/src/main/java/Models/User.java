package Models;

public class User {
    private Integer _id;
    private String name;
    private Integer favBook;

    public User(Integer _id, String name, Integer favBook) {
        this._id = _id;
        this.name = name;
        this.favBook = favBook;
    }
}
