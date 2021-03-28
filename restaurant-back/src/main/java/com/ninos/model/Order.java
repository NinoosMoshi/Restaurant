package com.ninos.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_name")
    private String OrderName;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "image")
    private String img;

    @Column(name = "description")
    @Lob                           // it will size of String from varChar 255 into long text
    private String description;


    @Column(name="date_create")
    @CreationTimestamp          // it will take local time and put it in the database
    private Date dateCreated;

    @Column(name = "date_update")
    @UpdateTimestamp            // when we update time and it will put automatically in the database
    private Date dateUpdated;



    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;


}
