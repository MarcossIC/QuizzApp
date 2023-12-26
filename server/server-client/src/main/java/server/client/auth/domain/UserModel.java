package server.client.auth.domain;

public record UserModel(String ID, String name, String lastname, String email, String password) {
    public UserModel(String name, String lastname, String email, String password){
        this("",name,lastname,email,password);
    }
}
