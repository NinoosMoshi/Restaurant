package com.ninos.service;

import com.ninos.model.Category;
import com.ninos.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private CategoryRepository categoryRepo;

    @Autowired
    public CategoryService(CategoryRepository categoryRepo) {
        this.categoryRepo = categoryRepo;
    }


    public List<Category> allCategories(){
        return categoryRepo.findAll();
    }




}
