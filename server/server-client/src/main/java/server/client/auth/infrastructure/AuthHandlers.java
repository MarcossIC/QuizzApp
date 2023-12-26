package server.client.auth.infrastructure;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import static org.springframework.http.MediaType.APPLICATION_JSON;

@Component
@RequiredArgsConstructor
public class AuthHandlers {
    private Mono<ServerResponse> notFound = ServerResponse.notFound().build();
    @Bean
    public Mono<ServerResponse> getUserHandler(ServerRequest serverRequest){
        return ServerResponse.ok()
                .contentType(APPLICATION_JSON)
                .body("Am User", String.class)
                .switchIfEmpty(notFound);
    }
}
