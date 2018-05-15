export default item => {
  switch (item.type) {
    case "loggin":
      return "entrou no sistema";
    case "create_product":
      return `criou o produto ${item.product.title}`;
    case "update_product":
      return `alterou o produto ${item.product.title}`;
    case "delete_product":
      return `alterou o produto ${item.product.title}`;
  }
};
