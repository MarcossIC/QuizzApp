package server.client.auth.infrastructure;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.accept;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.http.MediaType.APPLICATION_JSON;


@Configuration
public class AuthRoutes {
    @Bean
    public RouterFunction<ServerResponse> getUserRoute(AuthHandlers handler) {

        return route().path("/api/v1/users", pathB -> pathB
                .nest(accept(APPLICATION_JSON), builder -> builder
                        .GET("/{id}", handler::getUserHandler)
                )).build();
    }
}
