function.Product=new Object();
this.pid=pid;
this.pname=pname;
this.price=price;
this.display=function(){
  return this.pid+" "+this.pname+" "+this.price;
}

let product=new Product(101,"pepsi",30.0);
console.log(product.pid);
console.log(pname);
console.log(price);
console.log(display());

