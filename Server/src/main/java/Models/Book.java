package Models;

public class Book {
    private Integer _id;
    private String name;
    private Integer authorId;

    public Book(Integer _id, String name, Integer authorId) {
        this._id = _id;
        this.name = name;
        this.authorId = authorId;
    }
}
