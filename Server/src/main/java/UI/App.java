package UI;

import java.util.HashMap;

import Business.AuthorBusiness;
import Business.BookBusiness;
import Business.UserBusiness;
import spark.*;
import com.google.gson.Gson;

import static spark.Spark.staticFiles;

public final class App {
    private static final HashMap<String, String> corsHeaders = new HashMap<>();

    static {
        corsHeaders.put("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        corsHeaders.put("Access-Control-Allow-Origin", "*");
        corsHeaders.put("Access-Control-Allow-Headers", "*");
    }

    public static void apply() {
        Filter filter = (request, response) -> corsHeaders.forEach(response::header);
        Spark.after(filter);
    }

    public static void main(String[] args) {
        UserBusiness userBusiness = new UserBusiness();
        AuthorBusiness authorBusiness = new AuthorBusiness();
        BookBusiness bookBusiness = new BookBusiness();

        Gson gsonIncludedAllFields = new Gson();

        staticFiles.location("/public");

        App.apply(); // Call this before mapping thy routes

        //User API
        Spark.get("/users", ((request, response) ->
                gsonIncludedAllFields.toJson(userBusiness.getAllUsers())));
        Spark.get("/user/:id", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":id"));
            return gsonIncludedAllFields.toJson(userBusiness.getUserById(userId));
        }));
        Spark.post("/remove/user/book/:userId/:bookId", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":userId"));
            Integer bookId = Integer.parseInt(request.params(":bookId"));
            return gsonIncludedAllFields.toJson(userBusiness.deleteBookFromUser(userId, bookId));
        }));
        Spark.post("/remove/user/:userId", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":userId"));
            return gsonIncludedAllFields.toJson(userBusiness.deleteUserById(userId));
        }));
        Spark.post("/update/favBook/:userId/:bookId", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":userId"));
            Integer bookId = Integer.parseInt(request.params(":bookId"));
            userBusiness.updateFavBook(userId, bookId);
            return gsonIncludedAllFields.toJson(userBusiness.getUserById(userId));
        }));
        Spark.post("/update/name/:userId/:name", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":userId"));
            String name = request.params(":name");
            userBusiness.updateUserName(userId, name);
            return gsonIncludedAllFields.toJson(userBusiness.getUserById(userId));
        }));
        Spark.post("/user/book/:userId/:bookId", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":userId"));
            Integer bookId = Integer.parseInt(request.params(":bookId"));
            return gsonIncludedAllFields.toJson(userBusiness.addBookToUser(userId, bookId));
        }));
        //Book API
        Spark.get("/books", ((request, response) ->
                gsonIncludedAllFields.toJson(bookBusiness.getAllBooks())));
        Spark.get("/book/name/:id", ((request, response) -> {
            Integer bookId = Integer.parseInt(request.params(":id"));
            return gsonIncludedAllFields.toJson(bookBusiness.getBookNameById(bookId));
        }));
        Spark.get("/userBookList/:id", ((request, response) -> {
            Integer userId = Integer.parseInt(request.params(":id"));
            return gsonIncludedAllFields.toJson(bookBusiness.getUserBookList(userId));
        }));
        //author API
        Spark.get("/authors", ((request, response) ->
                gsonIncludedAllFields.toJson(authorBusiness.getAllAuthors())));
        Spark.get("/author/name/:id", ((request, response) -> {
            Integer authorId = Integer.parseInt(request.params(":id"));
            return gsonIncludedAllFields.toJson(authorBusiness.getAuthorsNameById(authorId));
        }));
    }
}
