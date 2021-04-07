package Models;

public class Author {
    private Integer _id;
    private String name;

    public Author(Integer _id, String name) {
        this._id = _id;
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
