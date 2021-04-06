package UI;

import java.util.HashMap;

import Business.ManagerBusiness;
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
        ManagerBusiness managerBusiness = new ManagerBusiness();

        Gson gsonIncludedAllFields = new Gson();

        staticFiles.location("/public");

        App.apply(); // Call this before mapping thy routes

        Spark.get("/managers", ((request, response) ->
                gsonIncludedAllFields.toJson(managerBusiness.getAllManagers())));
    }
}
