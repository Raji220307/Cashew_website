function Processing() {
  return (
    <div className="container pt-5 mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            className="card shadow-sm border-0 p-4"
            style={{ backgroundColor: "#fff8f2", borderRadius: "12px" }}
          >
            <h2 className="text-center  mb-4" style={{color:"#4B352A"}}>⚙️ Cashew Processing</h2>
            <p className="text-muted fs-6">
              After harvesting, cashew nuts go through multiple stages of processing to make them edible and safe for consumption. The main stages include:
            </p>

            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🌞 Drying:</strong> Sun-dried to reduce moisture.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🔥 Roasting:</strong> Nuts are roasted to loosen shells.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🔧 Shelling:</strong> Removal of the hard outer shell.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>🧻 Peeling:</strong> Removal of the thin skin layer.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>📏 Grading:</strong> Sorting nuts by size and quality.
              </li>
              <li className="list-group-item" style={{ backgroundColor: "#fff8f2" }}>
                <strong>📦 Packing:</strong> Vacuum packing for freshness.
              </li>
            </ul>

            <p className="text-muted fs-6">
              These steps ensure cashews are clean, safe, and ready to be packed and sold. Quality control and hygiene are critical during the entire process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Processing;
