function HealthBenefits() {
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <div
            className="card shadow border-0 p-4"
            style={{ backgroundColor: "#fff5eb" }} 
          >
            <h2 className="card-title mb-3 text-brown">Health Benefits of Cashews</h2>
            <p className="card-text lead text-muted">Cashews are not just tasty — they’re packed with nutrients.</p>
            <ul className="list-group list-group-flush text-start mt-4">
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Rich in healthy fats and protein</li>
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Boosts heart health</li>
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Supports bone and joint strength</li>
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Good source of vitamins E, K, and B6</li>
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Promotes healthy skin and hair</li>
              <li className="list-group-item" style={{ backgroundColor: "#fff5eb" }}>🥜 Enhances immune function</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthBenefits;
