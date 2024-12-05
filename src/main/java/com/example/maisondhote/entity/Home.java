package com.example.maisondhote.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.JOINED) // Pour hériter des propriétés dans la base
public class Home {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String titre;

    @Lob
    private String description;

    private String localisation;

    private double prixParNuit;

    private int capacite;

    private String typeVue;

    private boolean disponibilite;

    @ElementCollection
    private List<String> images; // URLs des images

    @ElementCollection
    private List<String> equipements; // Liste des équipements supplémentaires
    private String servicesInclus; // Autres services inclus
    private String descriptionDetaille; // Description du quartier
    private int nombreChambres; // Nombre de chambres
    private String map;



    public Home(int id, String titre, String description, String localisation, int capacite, double prixParNuit, String typeVue, boolean disponibilite, List<String> images, List<String> equipements, String servicesInclus, String descriptionDetaille, int nombreChambres, String map) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.localisation = localisation;
        this.capacite = capacite;
        this.prixParNuit = prixParNuit;
        this.typeVue = typeVue;
        this.disponibilite = disponibilite;
        this.images = images;
        this.equipements = equipements;
        this.servicesInclus = servicesInclus;
        this.descriptionDetaille = descriptionDetaille;
        this.nombreChambres =nombreChambres;
        this.map = map;
    }

    public Home() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocalisation() {
        return localisation;
    }

    public void setLocalisation(String localisation) {
        this.localisation = localisation;
    }

    public double getPrixParNuit() {
        return prixParNuit;
    }

    public void setPrixParNuit(double prixParNuit) {
        this.prixParNuit = prixParNuit;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public String getTypeVue() {
        return typeVue;
    }

    public void setTypeVue(String typeVue) {
        this.typeVue = typeVue;
    }

    public boolean isDisponibilite() {
        return disponibilite;
    }

    public void setDisponibilite(boolean disponibilite) {
        this.disponibilite = disponibilite;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<String> getEquipements() {
        return equipements;
    }

    public void setEquipements(List<String> equipements) {
        this.equipements = equipements;
    }

    public String getServicesInclus() {
        return servicesInclus;
    }

    public void setServicesInclus(String servicesInclus) {
        this.servicesInclus = servicesInclus;
    }

    public String getDescriptionDetaille() {
        return descriptionDetaille;
    }

    public void setDescriptionDetaille(String descriptionDetaille) {
        this.descriptionDetaille = descriptionDetaille;
    }

    public int getNombreChambres() {
        return nombreChambres;
    }

    public void setNombreChambres(int nombreChambres) {
        this.nombreChambres = nombreChambres;
    }

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }
}
