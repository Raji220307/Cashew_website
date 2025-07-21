function ExportAndTrade() {
  return (
    <div className="container pt-5 mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="card border-0 shadow-sm p-4"
            style={{ backgroundColor: "#fff8f2", borderRadius: "12px" }}
          >
            {/* Header */}
            <h2 className="text-center  mb-4" style={{color:"#4B352A"}}>🌍 Cashew Export & Trade</h2>

            {/* Description */}
            <p className="text-muted fs-6">
              Cashew nuts are among the most traded agricultural products globally, with high demand from the US, Europe, and Asia. India's and Vietnam's cashew industries play a major role in global supply.
            </p>

            {/* Trade Points List */}
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>📦 Packaging:</strong> Vacuum-packed or nitrogen-flushed for freshness.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🚢 Shipping:</strong> Exported via sea freight in sealed containers.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>📑 Documentation:</strong> Includes export licenses & quality certificates.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>📊 Trade Stats:</strong> India exports over 1.5 lakh metric tons of cashews annually.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🤝 Ethical Trade:</strong> Many exporters support fair trade practices.
              </li>
            </ul>

            {/* Call to Action */}
            <div className="text-center mt-4">
              <a
                href="#"
                className="btn px-4 py-2 rounded-pill shadow-sm"
                style={{backgroundColor:"#4B352A", color:"#B2CD9C"}}
              >
                📥 Download Export Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportAndTrade;
