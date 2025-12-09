import React, { useState, useMemo } from "react";
import './products.css';
import { assets } from "../../../../assets/assets";

const mockupData = [
  {
    title: "chairman Desk",
    category: "Latest Products",
    fromAmount: 95000, // Was 80, now 95,000 Ksh
    toAmount: 75000,   // Was 60, now 75,000 Ksh
    headImage: assets.chairman, 
    productImages: [
      "https://minio-host.netoracloud.com/images/1",
      "https://minio-host.netoracloud.com/images/2",
      "https://minio-host.netoracloud.com/images/3",
      "https://minio-host.netoracloud.com/images/4",
    ],
    ratings: "5.4",
  },
  {
    title: "Modern Sofa",
    category: "Sofas",
    fromAmount: 185000, // Was 120, now 185,000 Ksh
    toAmount: 149999,  // Was 95, now 149,999 Ksh
    headImage: "https://minio-host.netoracloud.com/head2",
    productImages: [
      "https://minio-host.netoracloud.com/images/5",
      "https://minio-host.netoracloud.com/images/6",
      "https://minio-host.netoracloud.com/images/7",
      "https://minio-host.netoracloud.com/images/8",
    ],
    ratings: "4.8",
  },
  {
    title: "Classic Wooden Chair",
    category: "Chairs",
    fromAmount: 55000, // Was 45, now 55,000 Ksh
    toAmount: 42000,  // Was 35, now 42,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head3",
    productImages: [
      "https://minio-host.netoracloud.com/images/9",
      "https://minio-host.netoracloud.com/images/10",
      "https://minio-host.netoracloud.com/images/11",
      "https://minio-host.netoracloud.com/images/12",
    ],
    ratings: "4.9",
  },
  {
    title: "Premium Dining Table",
    category: "Tables",
    fromAmount: 230000, // Was 150, now 230,000 Ksh
    toAmount: 195000,  // Was 120, now 195,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head4",
    productImages: [
      "https://minio-host.netoracloud.com/images/13",
      "https://minio-host.netoracloud.com/images/14",
      "https://minio-host.netoracloud.com/images/15",
      "https://minio-host.netoracloud.com/images/16",
    ],
    ratings: "5.0",
  },
  {
    title: "Outdoor Furniture Set",
    category: "Outdoor",
    fromAmount: 320000, // Was 200, now 320,000 Ksh
    toAmount: 285000,  // Was 175, now 285,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head5",
    productImages: [
      "https://minio-host.netoracloud.com/images/17",
      "https://minio-host.netoracloud.com/images/18",
      "https://minio-host.netoracloud.com/images/19",
      "https://minio-host.netoracloud.com/images/20",
    ],
    ratings: "4.7",
  },
  {
    title: "Luxury Bed Frame",
    category: "Beds",
    fromAmount: 480000, // Was 300, now 480,000 Ksh
    toAmount: 399000,  // Was 250, now 399,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head6",
    productImages: [
      "https://minio-host.netoracloud.com/images/21",
      "https://minio-host.netoracloud.com/images/22",
      "https://minio-host.netoracloud.com/images/23",
      "https://minio-host.netoracloud.com/images/24",
    ],
    ratings: "5.0",
  },
  {
    title: "Office Work Desk",
    category: "Office",
    fromAmount: 155000, // Was 180, now 155,000 Ksh
    toAmount: 125000,  // Was 150, now 125,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head7",
    productImages: [
      "https://minio-host.netoracloud.com/images/25",
      "https://minio-host.netoracloud.com/images/26",
      "https://minio-host.netoracloud.com/images/27",
      "https://minio-host.netoracloud.com/images/28",
    ],
    ratings: "4.6",
  },
  {
    title: "Kids Bunk Bed",
    category: "Kids",
    fromAmount: 210000, // Was 250, now 210,000 Ksh
    toAmount: 175000,  // Was 199, now 175,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head8",
    productImages: [
      "https://minio-host.netoracloud.com/images/29",
      "https://minio-host.netoracloud.com/images/30",
      "https://minio-host.netoracloud.com/images/31",
      "https://minio-host.netoracloud.com/images/32",
    ],
    ratings: "4.5",
  },
  {
    title: "Classic Wardrobe",
    category: "Wardrobes",
    fromAmount: 299000, // Was 220, now 299,000 Ksh
    toAmount: 245000,  // Was 180, now 245,000 Ksh
    headImage: "https://minio-host.netoracloud.com/head9",
    productImages: [
      "https://minio-host.netoracloud.com/images/33",
      "https://minio-host.netoracloud.com/images/34",
      "https://minio-host.netoracloud.com/images/35",
      "https://minio-host.netoracloud.com/images/36",
    ],
    ratings: "4.9",
  },
];

// 🔍 Auto-generate category filters (unique)
const filterCategories = [...new Set(mockupData.map((item) => item.category))];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Include "All" in the category list
  const categories = ["All", ...filterCategories];

  // Filter products based on selectedCategory
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return mockupData;
    }
    return mockupData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Ensures correct number formatting (e.g., 149,999)
  const formatPrice = (amount) => `Ksh ${amount.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;

  return (
    <div className="products_wrapper">
      <h1>Our Product Collections</h1>

      {/* Filter Buttons */}
      <div className="filter_buttons">
        {categories.map((cat, i) => (
          <button
            key={i}
            // Add 'active' class for styling
            className={`filter_btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* HORIZONTAL SCROLL Container */}
      {filteredProducts.length > 0 ? (
        <div className="products_container horizontal_scroll">
          {filteredProducts.map((item, idx) => {
            const discount = (100 * (item.fromAmount - item.toAmount) / item.fromAmount).toFixed(0);

            return (
              <div key={idx} className="product_card">
                
                {/* Product Header Image */}
                <div className="product_head">
                  <img src={item.headImage} alt={item.title} loading="lazy" />
                  {/* Discount Badge */}
                  {item.fromAmount > item.toAmount && (
                    <div className="badge discount_badge">
                      -{discount}% OFF
                    </div>
                  )}
                </div>

                <div className="product_info">
                  <p className="product_category">{item.category}</p>
                  <h2 className="product_title">{item.title}</h2>

                  <div className="product_prices">
                    <span className="from_price">{formatPrice(item.fromAmount)}</span>
                    <span className="to_price">{formatPrice(item.toAmount)}</span>
                  </div>

                  <div className="product_ratings">
                    <span role="img" aria-label="star">⭐</span> {item.ratings}
                  </div>
                </div>

                <div className="product_gallery">
                  {item.productImages.slice(0, 3).map((img, i) => ( // Show first 3 for a compact look
                    <img key={i} src={img} alt={`${item.title} small preview ${i + 1}`} loading="lazy" />
                  ))}
                </div>
                
                <button className="add_to_cart_btn">View Details</button>

              </div>
            );
          })}
        </div>
      ) : (
        <p className="no_products">No products found for the category: "{selectedCategory}".</p>
      )}
    </div>
  );
};

export default Products;