package com.ninos.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name ="category_logo")
    private String categoryLogo;

    @Column(name="date_create")
    @CreationTimestamp          // it will take local time and put it in the database
    private Date dateCreated;

    @Column(name = "date_update")
    @UpdateTimestamp            // when we update time and it will put automatically in the database
    private Date dateUpdated;



    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Order> orders;


}
