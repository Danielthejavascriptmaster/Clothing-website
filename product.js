const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find(p => p.id === Number(productId));

function renderProductDetail() {
    // Main wrappers
    const mainContent = document.createElement("div");
    const visualSection = document.createElement("div");
    const descriptionSection = document.createElement("div");

    // Badge
    const badge = document.createElement("span");
    const badgeImage = document.createElement("img");

    // Image grid
    const imageGrid = document.createElement("div");
    const image1 = document.createElement("div");
    const image2 = document.createElement("div");
    const image3 = document.createElement("div");
    const image4 = document.createElement("div");
    const image1Element = document.createElement("img");
    const image2Element = document.createElement("img");
    const image3Element = document.createElement("img");
    const image4Element = document.createElement("img");

    // Product info panel
    const productInfoPanel = document.createElement("div");
    const line = document.createElement("p");

    // Description panel
    const descriptionPanel = document.createElement("details");
    const descriptionSummary = document.createElement("summary");
    const descriptionTitle = document.createElement("span");
    const descriptionChevron = document.createElement("span");
    const descriptionContent = document.createElement("div");
    const descriptionText = document.createElement("div");
    const descriptionHeading = document.createElement("h2");
    const descriptionParagraph1 = document.createElement("p");
    const descriptionParagraph2 = document.createElement("p");
    const descriptionParagraph3 = document.createElement("p");
    const descriptionImage = document.createElement("img");

    // Shipping panel
    const shippingPanel = document.createElement("details");
    const shippingSummary = document.createElement("summary");
    const shippingTitle = document.createElement("span");
    const shippingChevron = document.createElement("span");
    const shippingContent = document.createElement("div");
    const shippingText = document.createElement("div");
    const shippingParagraph1 = document.createElement("p");
    const shippingParagraph2 = document.createElement("p");

    // Features panel
    const featuresPanel = document.createElement("details");
    const featuresSummary = document.createElement("summary");
    const featuresTitle = document.createElement("span");
    const featuresChevron = document.createElement("span");
    const featuresContent = document.createElement("div");
    const featuresText = document.createElement("div");
    const featuresWrapper = document.createElement("div");
    const featuresHeading = document.createElement("h3");
    const featuresList = document.createElement("ul");

    // Similar items
    const similarItemsSection = document.createElement("div");
    const similarItemsHeading = document.createElement("h1");
    const similarItemsText = document.createElement("p");
    const similarItemsPictures = document.createElement("div");

    // Facts
    const productFactSection = document.createElement("section");

    // You might like
    const youMightLikeSection = document.createElement("div");
    const youMightLikeLabel = document.createElement("div");
    const youMightLikeHeading = document.createElement("h1");
    const productColumnWrapper = document.createElement("div");

    // Description side
    const descriptionContentWrapper = document.createElement("div");
    const category = document.createElement("div");
    const productType = document.createElement("div");
    const productRating = document.createElement("div");
    const productName = document.createElement("div");
    const productPrice = document.createElement("div");
    const productFacts = document.createElement("div");

    // Colorways
    const colorWaysWrapper = document.createElement("div");
    const colorName = document.createElement("div");

    // Sizes
    const quickFact = document.createElement("div");
    const sizeLabel = document.createElement("div");
    const sizeWrapper = document.createElement("div");
    const sizeGuide = document.createElement("div");
    const sizeTip = document.createElement("div");

    // Buttons
    const actionButtons = document.createElement("div");
    const buyButton = document.createElement("div");
    const addToCartButton = document.createElement("div");

    // Payment
    const paymentMethods = document.createElement("div");
    const paymentLogos = document.createElement("div");

    // Materials
    // Materials
    const materials = document.createElement("div");
    const materialsHeading = document.createElement("h3");
    const materialsList = document.createElement("ul");


    //! className assignments

    mainContent.className = "main-content";
    visualSection.className = "visual-section";
    descriptionSection.className = "description-section";

    badge.className = "badge";

    imageGrid.className = "image-grid";
    image1.className = "images";
    image2.className = "images";
    image3.className = "images";
    image4.className = "images";

    productInfoPanel.className = "product-info-panel";
    line.className = "line";

    descriptionPanel.className = "panel";
    descriptionContent.className = "panel-content";
    descriptionText.className = "panel-text";
    descriptionChevron.className = "chevron";
    descriptionImage.id = "panel-image";

    shippingPanel.className = "panel";
    shippingContent.className = "panel-content";
    shippingText.className = "panel-text";
    shippingChevron.className = "chevron";

    featuresPanel.className = "panel";
    featuresContent.className = "panel-content";
    featuresText.className = "panel-text";
    featuresChevron.className = "chevron";
    featuresWrapper.className = "features";
    featuresList.className = "features-list";

    similarItemsSection.className = "find-similar-items-section";
    similarItemsHeading.className = "find-items";
    similarItemsText.className = "similarity-text";
    similarItemsPictures.className = "find-items-pictures";

    productFactSection.className = "product-fact";

    youMightLikeSection.className = "you-might-like-section";
    youMightLikeLabel.className = "you-might-like-label";
    productColumnWrapper.className = "product-column-wrapper";

    descriptionContentWrapper.className = "description-content";
    category.className = "category";
    productType.className = "product-type";
    productRating.className = "product-rating";
    productName.className = "product-name";
    productPrice.className = "product-price";
    productFacts.className = "product-facts";

    colorWaysWrapper.className = "colorWays-wrapper";
    colorName.id = "color-name";

    quickFact.className = "quick-fact";
    sizeLabel.className = "size-label";
    sizeWrapper.className = "size-wrapper";
    sizeGuide.className = "size-guide";
    sizeTip.className = "size-tip";

    actionButtons.className = "action-buttons";
    buyButton.className = "buy-button";
    addToCartButton.className = "add-to-cart-button";

    paymentMethods.className = "payment-methods";
    paymentLogos.className = "payment-logos";


    badgeImage.src = product.badge;
    badgeImage.alt = product.name;

    product.colorWays.forEach(colorWay => {
        const colorWayDiv = document.createElement("div");
        const colorWayImg = document.createElement("img");

        colorWayImg.src = colorWay.firstImage;

        colorWayImg.alt = colorWay.name;
        colorWayDiv.className = "color-way"

        colorWaysWrapper.appendChild(colorWayDiv)
        colorWayDiv.appendChild(colorWayImg)

        
        colorWayDiv.addEventListener("click", function(){
            colorName.textContent = colorWay.name

            image1Element.src = colorWay.firstImage
            image2Element.src = colorWay.secondImage
            image3Element.src = colorWay.thirdImage
            image4Element.src = colorWay.fourthImage

            descriptionImage.src = colorWay.thirdImage
        })
    });

        image1Element.src = product.colorWays[0].firstImage
        image2Element.src = product.colorWays[0].secondImage
        image3Element.src = product.colorWays[0].thirdImage
        image4Element.src = product.colorWays[0].fourthImage

        colorName.textContent = product.colorWays[0].name
        
        descriptionImage.src = product.colorWays[0].firstImage


        productType.textContent = product.category
        productName.textContent = product.name
        productPrice.textContent = product.price + "£"
        quickFact.textContent = product.quickFact

        product.sizes.forEach(sizes => {
            const size = document.createElement("div")

            size.textContent = sizes
            size.className = "size"

            sizeWrapper.appendChild(size)
        })
        

        sizeLabel.textContent = "Sizes"
        sizeGuide.textContent = "Size-guide"

        const sizeTipSpan = document.createElement("span")
        const sizeTipP = document.createElement("p")
        
        sizeTipSpan.textContent = "🛈 Regular fit."

        sizeTipP.appendChild(sizeTipSpan)
        sizeTipP.appendChild(document.createTextNode(" We recommend that you order your actual size for a better fit."))

        sizeTip.appendChild(sizeTipP)

        buyButton.textContent = "✦ Buy Now"
        addToCartButton.textContent = "🛒︎ Add to Cart"

        
        const paymentMethodsP = document.createElement("p")

        paymentMethodsP.textContent = "For payment we use"

        paymentMethods.appendChild(paymentMethodsP)

        const paymentImage1 = document.createElement("img")
        const paymentImage2 = document.createElement("img")
        const paymentImage3 = document.createElement("img")
        const paymentImage4 = document.createElement("img")
        const paymentImage5 = document.createElement("img")
        const paymentImage6 = document.createElement("img")
        const paymentImage7 = document.createElement("img")

        paymentImage1.src = "https://tse2.mm.bing.net/th/id/OIP.HF17CI_Y90T9ipYHWSnFfgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        paymentImage2.src = "https://tse1.mm.bing.net/th/id/OIP.RXJ2wv-doV7h3ugEpoNNRQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        paymentImage3.src = "https://tse3.mm.bing.net/th/id/OIP.gz8RZ8bCloIOdTPLig571QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
        paymentImage4.src = "https://freepnglogo.com/images/all_img/1706195363venmo-logo-transparent.png"
        paymentImage5.src = "https://tse2.mm.bing.net/th/id/OIP.AyI29_Ej0OeIGvQ05PR1OwHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"
        paymentImage6.src = "https://th.bing.com/th/id/R.3199df0e6d1daa6b20a55c39e60096d8?rik=DBXdYJQdMKduwA&pid=ImgRaw&r=0"
        paymentImage7.src = "https://images.ctfassets.net/4pxjo1vaz7xk/MTY2MDY1MzUyNDU0MjI/fb71fd615b1b5cba202c3728f7f008a4/klarna-og.png"

        paymentLogos.appendChild(paymentImage1)
        paymentLogos.appendChild(paymentImage2)
        paymentLogos.appendChild(paymentImage3)
        paymentLogos.appendChild(paymentImage4)
        paymentLogos.appendChild(paymentImage5)
        paymentLogos.appendChild(paymentImage6)
        paymentLogos.appendChild(paymentImage7)

        
        //! Materials — textContent + forEach

        materialsHeading.textContent = "Materials"

        product.materials.forEach(material => {
            

            const materialLi = document.createElement("li");
            const materialStrong = document.createElement("strong");

            materialStrong.textContent = material.part + ":";

            materialLi.appendChild(materialStrong);
            materialLi.appendChild(document.createTextNode(" " + material.material));

            materialsList.appendChild(materialLi);
        });

        descriptionChevron.textContent = "⌄"
        descriptionTitle.textContent = "Description"

        descriptionParagraph1.textContent = product.description[0];
        descriptionParagraph2.textContent = product.description[1];
        descriptionParagraph3.textContent = product.description[2];

        shippingChevron.textContent = "⌄"
        shippingTitle.textContent = "Shipping & Returns"

        shippingParagraph1.textContent = shippingInfo.returns;
        shippingParagraph2.textContent = shippingInfo.delivery;

        featuresChevron.textContent = "⌄"
        featuresTitle.textContent = "Features"
        featuresHeading.textContent = "Features"
        

        product.features.forEach((features) => {
            const featuresLi = document.createElement("li")
            featuresLi.textContent = features
            featuresList.appendChild(featuresLi)
        })


        similarItemsHeading.textContent = "Find Similar Items"
        similarItemsText.textContent = "Get help finding similar items. Check it out!"

        similarItemsPictures
        
        const similarProducts = products.filter(p => (p.category === product.category || p.brand === product.brand) && p.id !== product.id);
        
        const randomIndex = Math.floor(Math.random() * similarProducts.length);
        const randomProduct = similarProducts[randomIndex];

        const chosenProducts = [];

        for (let i = 0; i < 3; i++) {
        const randomI = Math.floor(Math.random() * similarProducts.length);
        chosenProducts.push(similarProducts[randomI]);

        similarProducts.splice(randomI, 1)
        }

        chosenProducts.forEach((similar) => {
            const similarImage = document.createElement("img")
            
            similarImage.src = similar.firstImage
            similarImage.alt = similar.name

            similarItemsPictures.appendChild(similarImage)
        })

        const fitFact = document.createElement("div");
        const fitTitle = document.createElement("span");
        const fitValue = document.createElement("span");
        fitFact.className = "fact";
        fitTitle.className = "fact-title";
        fitValue.className = "fact-value";
        fitTitle.textContent = "Fit";
        fitValue.textContent = product.productOccasion[0];

        const designedForFact = document.createElement("div");
        const designedForTitle = document.createElement("span");
        const designedForValue = document.createElement("span");

        designedForFact.className = "fact";
        designedForTitle.className = "fact-title";
        designedForValue.className = "fact-value";
        designedForTitle.textContent = "Designed For";
        designedForValue.textContent = product.productOccasion[1];

        const activityFact = document.createElement("div");
        const activityTitle = document.createElement("span");
        const activityValue = document.createElement("span");
        
        activityFact.className = "fact";
        activityTitle.className = "fact-title";
        activityValue.className = "fact-value";
        activityTitle.textContent = "Activity";
        activityValue.textContent = product.productOccasion[2];

        productFactSection.appendChild(fitFact);
        fitFact.appendChild(fitTitle);
        fitFact.appendChild(fitValue);

        productFactSection.appendChild(designedForFact);
        designedForFact.appendChild(designedForTitle);
        designedForFact.appendChild(designedForValue);

        productFactSection.appendChild(activityFact);
        activityFact.appendChild(activityTitle);
        activityFact.appendChild(activityValue);
            
        
        

        
    //! YOUR CODE HERE: descriptionHeading / descriptionParagraph1-3 textContent


    //! YOUR CODE HERE: shipping paragraph textContent


    //! YOUR CODE HERE: features.forEach loop (build <li>, append to featuresList)


    //! YOUR CODE HERE: similar items, product facts, you might like, sizes,
    //! materials.forEach loop, category/type/rating/name/price/facts textContent


    //! appendChild — parent.appendChild(child)

    document.body.appendChild(mainContent);
    mainContent.appendChild(visualSection);
    mainContent.appendChild(descriptionSection);

    visualSection.appendChild(badge);
    badge.appendChild(badgeImage);

    visualSection.appendChild(imageGrid);
    imageGrid.appendChild(image1);
    imageGrid.appendChild(image2);
    imageGrid.appendChild(image3);
    imageGrid.appendChild(image4);
    image1.appendChild(image1Element);
    image2.appendChild(image2Element);
    image3.appendChild(image3Element);
    image4.appendChild(image4Element);

    visualSection.appendChild(productInfoPanel);
    productInfoPanel.appendChild(line);

    productInfoPanel.appendChild(descriptionPanel);
    descriptionPanel.appendChild(descriptionSummary);
    descriptionSummary.appendChild(descriptionTitle);
    descriptionSummary.appendChild(descriptionChevron);
    descriptionPanel.appendChild(descriptionContent);
    descriptionContent.appendChild(descriptionText);
    descriptionText.appendChild(descriptionHeading);
    descriptionText.appendChild(descriptionParagraph1);
    descriptionText.appendChild(descriptionParagraph2);
    descriptionText.appendChild(descriptionParagraph3);
    descriptionContent.appendChild(descriptionImage);

    productInfoPanel.appendChild(shippingPanel);
    shippingPanel.appendChild(shippingSummary);
    shippingSummary.appendChild(shippingTitle);
    shippingSummary.appendChild(shippingChevron);
    shippingPanel.appendChild(shippingContent);
    shippingContent.appendChild(shippingText);
    shippingText.appendChild(shippingParagraph1);
    shippingText.appendChild(shippingParagraph2);

    productInfoPanel.appendChild(featuresPanel);
    featuresPanel.appendChild(featuresSummary);
    featuresSummary.appendChild(featuresTitle);
    featuresSummary.appendChild(featuresChevron);
    featuresPanel.appendChild(featuresContent);
    featuresContent.appendChild(featuresText);
    featuresText.appendChild(featuresWrapper);
    featuresWrapper.appendChild(featuresHeading);
    featuresWrapper.appendChild(featuresList);

    productInfoPanel.appendChild(similarItemsSection);
    similarItemsSection.appendChild(similarItemsHeading);
    similarItemsSection.appendChild(similarItemsText);
    similarItemsSection.appendChild(similarItemsPictures);

    productInfoPanel.appendChild(productFactSection);

    productInfoPanel.appendChild(youMightLikeSection);
    youMightLikeSection.appendChild(youMightLikeLabel);
    youMightLikeLabel.appendChild(youMightLikeHeading);
    youMightLikeSection.appendChild(productColumnWrapper);

    descriptionSection.appendChild(descriptionContentWrapper);
    descriptionContentWrapper.appendChild(category);
    descriptionContentWrapper.appendChild(productType);
    descriptionContentWrapper.appendChild(productRating);
    descriptionContentWrapper.appendChild(productName);
    descriptionContentWrapper.appendChild(productPrice);
    descriptionContentWrapper.appendChild(productFacts);
    descriptionContentWrapper.appendChild(colorWaysWrapper);
    colorWaysWrapper.appendChild(colorName);

    descriptionSection.appendChild(quickFact);
    descriptionSection.appendChild(sizeLabel);
    descriptionSection.appendChild(sizeWrapper);

    descriptionSection.appendChild(sizeGuide);
    descriptionSection.appendChild(sizeTip);

    descriptionSection.appendChild(actionButtons);
    actionButtons.appendChild(buyButton);
    actionButtons.appendChild(addToCartButton);

    descriptionSection.appendChild(paymentMethods);
    paymentMethods.appendChild(paymentLogos);

    descriptionSection.appendChild(materials);
    materials.appendChild(materialsHeading);
    materials.appendChild(materialsList);
    

}

renderProductDetail();