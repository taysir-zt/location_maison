package com.example.maisondhote;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "com.example.maisondhote.entity")  // Assurez-vous que vos entités sont dans ce package
@EnableJpaRepositories(basePackages = "com.example.maisondhote.repository")  // Vérifiez que le package des repositories est correct
public class MaisondhoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaisondhoteApplication.class, args);
	}

}
