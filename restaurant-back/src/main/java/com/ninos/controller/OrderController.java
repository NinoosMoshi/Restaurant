package com.ninos.controller;

import com.ninos.model.Order;
import com.ninos.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/allOrders")
    public List<Order> getAllOrders(){
        return orderService.allOrders();
    }

    @GetMapping("/category")
    public List<Order> getAllOrderByCategoryId(@RequestParam Long id){
        return orderService.getOrdersByCategoryId(id);
    }

    // http://localhost:8080/api/orderkey?keyword=c
    @GetMapping("/orderkey")
    public List<Order> getOrdersByKey(@RequestParam String keyword){
        return orderService.getOrdersByKey(keyword);
    }

}
