package server.client;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.config.EnableWebFlux;

@SpringBootApplication
@EnableWebFlux
public class QuizzApp {
    public static void main(String... args) throws URISyntaxException {
        if (FirebaseApp.getApps().isEmpty()) {
            var loader = QuizzApp.class.getClassLoader();
            var resource = loader.getResource("./firebase-service-credentials.json");

            if (resource == null)
                throw new RuntimeException("No se pudo encontrar el archivo firebase-service-credentials.json");

            URI uri = resource.toURI();
            try (var serviceAccount = new FileInputStream(new File(uri))) {
                FirebaseOptions options = (new FirebaseOptions.Builder()).setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();
                FirebaseApp.initializeApp(options);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
        SpringApplication.run(QuizzApp.class, args);
    }
}