import { Component } from "react";
import Data from "./Data";

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      productData: Data,
      selectedCategory: null,
    };
  }

  // Get unique categories
  getCategories() {
    return [...new Set(this.state.productData.map((product) => product.category))];
  }

  // Filter products based on selected category
  getFilteredProducts() {
    const { selectedCategory, productData } = this.state;
    return selectedCategory
      ? productData.filter((product) => product.category === selectedCategory)
      : productData;
  }

  render() {
    const categories = this.getCategories();
    const filteredProducts = this.getFilteredProducts();

    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Product Categories
        </h1>

        {/* Category Filter */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          {categories.map((category) => (
            <button
              key={category}
              style={{
                padding: "8px 12px",
                backgroundColor:
                  this.state.selectedCategory === category ? "#007BFF" : "#E0E0E0",
                color: this.state.selectedCategory === category ? "white" : "black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => this.setState({ selectedCategory: category })}
            >
              {category}
            </button>
          ))}
          <button
            style={{
              padding: "8px 12px",
              backgroundColor: "#E0E0E0",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => this.setState({ selectedCategory: null })}
          >
            Show All
          </button>
        </div>

        {/* Product Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "16px" }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "12px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{product.title}</h2>
                <p>{product.description.slice(0, 50)}...</p>
                <p style={{ color: "gray", fontSize: "14px" }}>Price: ${product.price}</p>
                <button
                  style={{
                    marginTop: "8px",
                    padding: "8px 12px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductPage;
