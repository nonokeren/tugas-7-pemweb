class ProductModel {
  constructor() {
    this.products = [];
    this.currentId = 1;
  }

  addProduct(name) {
    const product = { id: this.currentId++, name };
    this.products.push(product);
    return product;
  }

  deleteProduct(id) {
    this.products = this.products.filter(product => product.id !== id);
  }

  updateProduct(id, newName) {
    const product = this.products.find(product => product.id === id);
    if (product) product.name = newName;
  }

  getAllProducts() {
    return this.products;
  }
}
