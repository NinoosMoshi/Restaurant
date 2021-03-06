package com.ninos.service;

import com.ninos.model.Order;
import com.ninos.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepo;

    @Autowired
    public OrderService(OrderRepository orderRepo) {
        this.orderRepo = orderRepo;
    }


    public List<Order> allOrders(){
        return orderRepo.findAll();
    }

    public List<Order> getOrdersByCategoryId(Long id){
        return orderRepo.findByCategoryId(id);
    }

    public List<Order> getOrdersByKey(String key){
        return orderRepo.findByOrderNameContaining(key);
    }

    public Order getOrder(Long id){
        return orderRepo.findById(id).get();
    }



}
