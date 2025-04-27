class ProductView {
  constructor() {
    this.listElement = document.getElementById('product-list');
    this.formElement = document.getElementById('product-form');
    this.nameInput = document.getElementById('product-name');
  }

  render(products, handlers) {
    this.listElement.innerHTML = '';

    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product.name;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = () => {
        const newName = prompt('Edit Nama Produk:', product.name);
        if (newName) handlers.onEdit(product.id, newName);
      };

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Hapus';
      deleteButton.onclick = () => handlers.onDelete(product.id);

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      this.listElement.appendChild(li);
    });
  }

  bindAddProduct(handler) {
    this.formElement.onsubmit = (e) => {
      e.preventDefault();
      if (this.nameInput.value.trim()) {
        handler(this.nameInput.value.trim());
        this.nameInput.value = '';
      }
    };
  }
}
