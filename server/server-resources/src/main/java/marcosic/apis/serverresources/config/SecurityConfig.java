package marcosic.apis.serverresources.config;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Slf4j
@Configuration
public class SecurityConfig {

    @SneakyThrows
    @Bean
    public SecurityWebFilterChain chain(ServerHttpSecurity http){
        return http
                .csrf( customizer-> customizer.disable())
                .httpBasic( customizer-> customizer.disable())
                .oauth2ResourceServer(oauth2-> oauth2.jwt(jwt-> jwt.jwkSetUri("")) )
                .authorizeExchange( security-> security
                        .pathMatchers(HttpMethod.OPTIONS).permitAll()
                        .anyExchange().authenticated()
                )
                .build();
    }
}
