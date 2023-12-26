package marcosic.apis.serverresources;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;

@SpringBootApplication
public class ServerResourcesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerResourcesApplication.class, args);
	}

}
