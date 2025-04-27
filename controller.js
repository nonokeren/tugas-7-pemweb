const model = new ProductModel();
const view = new ProductView();

const controller = {
  init() {
    view.bindAddProduct(this.handleAddProduct.bind(this));
    this.updateView();
  },

  handleAddProduct(name) {
    model.addProduct(name);
    this.updateView();
  },

  handleEditProduct(id, newName) {
    model.updateProduct(id, newName);
    this.updateView();
  },

  handleDeleteProduct(id) {
    model.deleteProduct(id);
    this.updateView();
  },

  updateView() {
    view.render(model.getAllProducts(), {
      onEdit: this.handleEditProduct.bind(this),
      onDelete: this.handleDeleteProduct.bind(this)
    });
  }
};

controller.init();
