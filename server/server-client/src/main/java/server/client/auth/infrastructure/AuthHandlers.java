package server.client.auth.infrastructure;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.http.MediaType.TEXT_PLAIN;

@Component
@RequiredArgsConstructor
public class AuthHandlers {

    private final Mono<ServerResponse> notFound = ServerResponse.notFound().build();
    public Mono<ServerResponse>  getUserHandler(ServerRequest serverRequest){
        return ServerResponse.ok()
                .contentType(APPLICATION_JSON)
                .body(Mono.just("Am user"), String.class)
                .switchIfEmpty(notFound);
    }

    public Mono<ServerResponse>  helloWorld(ServerRequest request){
        return ServerResponse.ok()
                .contentType(TEXT_PLAIN)
                .body(Mono.just("Hello world"), String.class);
    }
}
