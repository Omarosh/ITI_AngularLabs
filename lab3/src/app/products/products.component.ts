import {Component, OnInit} from '@angular/core';
import {Product} from "../Models/product";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var window: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  addproduct = false;
  Rate: number = 0;
  product: Product | null = null;
  idToEdit: number | null = null;
  products: Product[] = [];
  showImage = false;
  availableDate: Date = new Date();
  filter: string = '';
  formModal: any;

  closeResult: string="";

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    document.body.onload=()=>
    {this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );

  }}

  add(id: string, name: string, code: string, price: string, image: string) {

    let product: Product = new Product(Number(id), name, code, this.availableDate, Number(price), this.Rate, image);
    this.products.push(product);
    this.addproduct = false;


  }

  show(id: string) {
    this.products.forEach((product) => {

      if (product.id === Number(id)) {
        this.product = product;
      }


    });

  }

  delete(id: string) {
    this.products.forEach((product, index) => {

      if (product.id === Number(id)) {
        this.products.splice(index, 1);
      }
      this.product = null;


    });

  }

  edit(modal:any,id: string) {
    this.idToEdit = Number(id);
    this.modalService.open(modal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed }`;
    });
  }



  update( name: string, code: string, price: string, image: string) {
    this.products.forEach((product) => {

      if (product.id === this.idToEdit) {
        let productUpdated: Product = new Product(Number(this.idToEdit), name, code, this.availableDate, Number(price), this.Rate, image);

        product.name = productUpdated.name;
        product.code = productUpdated.code;
        product.price = productUpdated.price;
        product.rating = productUpdated.rating;
        product.image = productUpdated.image;
        product.available = productUpdated.available;

        this.idToEdit = null;

      }


    });
  }

  rate(value: string) {
    this.Rate = Number(value);
  }

  showImages() {
    this.showImage = true;
  }


  openFormModal() {
    document.body.onload= ()=>
    {this.formModal.show();}
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed }`;
    });
  }


}



