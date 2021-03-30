import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.css']
})
export class CategoryItemsComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( data =>{
      this.categories = data
    })
  }

}
