package com.ninos.repository;

import com.ninos.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    public List<Order> findByCategoryId(Long id);

    public List<Order> findByOrderNameContaining(String orderName);

}
