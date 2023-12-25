package server.client;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import lombok.SneakyThrows;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Objects;

@SpringBootApplication
@EnableWebFlux
public class QuizzApp {

    public static void main(String... args) throws URISyntaxException {
        if (FirebaseApp.getApps().isEmpty()) {
            var loader = QuizzApp.class.getClassLoader();
            var resource = loader.getResource("./firebase-service-credentials.json");

            URI uri = resource.toURI();
            try (var serviceAccount = new FileInputStream(new File(uri))) {
                FirebaseOptions options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .build();
                FirebaseApp.initializeApp(options);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        SpringApplication.run(QuizzApp.class, args);
    }
}
