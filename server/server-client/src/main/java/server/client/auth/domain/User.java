package server.client.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public final class User {
    private String ID;
    private String name;
    private String lastname;
    private String email;
    private String password;
}
