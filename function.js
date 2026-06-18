const ProductWrapper = document.createElement("div");
ProductWrapper.className = "product-wrapper";

for(let i = 0; i < products.length; i++){

    const ProductCard = document.createElement("div");
    ProductCard.className = "products";

    const ProductImage = document.createElement("img");
    ProductImage.src = products[i].firstImage;

    const ProductDescription = document.createElement("div");
    ProductDescription.className = "product-description";

    const ProductRating = document.createElement("div");
    ProductRating.className = "product-rating";
    ProductRating.innerHTML = "★★★★★ <span>(128)</span>";

    const TopRow = document.createElement("div");
    TopRow.className = "top-row";

    const ProductName = document.createElement("h2");
    ProductName.className = "product-name";
    ProductName.textContent = products[i].name;

    const ProductPrice = document.createElement("h2");
    ProductPrice.className = "product-price";
    ProductPrice.textContent = "£" + products[i].price;

    const ProductType = document.createElement("h2");
    ProductType.className = "product-type";
    ProductType.textContent = products[i].category;

    const AddToCartButton = document.createElement("button");
    AddToCartButton.id = "add-cart";

    const CartIcon = document.createElement("span");
    CartIcon.className = "material-symbols-outlined";
    CartIcon.textContent = "add_shopping_cart";

    AddToCartButton.appendChild(CartIcon);
    AddToCartButton.append(" Add to Cart");

    TopRow.appendChild(ProductName);
    TopRow.appendChild(ProductPrice);

    ProductDescription.appendChild(ProductRating);
    ProductDescription.appendChild(TopRow);
    ProductDescription.appendChild(ProductType);
    ProductDescription.appendChild(AddToCartButton);

    ProductCard.appendChild(ProductImage);
    ProductCard.appendChild(ProductDescription);

    ProductWrapper.appendChild(ProductCard);
}

document.querySelector(".product-section").appendChild(ProductWrapper);