import farm from "./assets/farm.jpg";

function CashewFarming() {
  return (
    <div className="container pt-5 mt-5 mb-5">
      <div className="row justify-content-center align-items-center">
        {/* Image section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src= {farm}
             alt="Cashew farming"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Text section */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm p-4"
            style={{ backgroundColor: "#fff8f2", borderRadius: "12px" }}
          >
            <h2 className="text-center text-success mb-4">🌱 Cashew Farming</h2>
            <p className="text-muted fs-6 fs-md-5">
              Cashew farming involves cultivating cashew trees in tropical climates. The trees require well-drained sandy loam soil and plenty of sunlight. The farming process starts with seed germination, followed by careful planting, pruning, pest control, and harvesting the cashew apples and nuts.
            </p>
            <p className="text-muted fs-6 fs-md-5">
              Farmers typically harvest the nuts during the dry season. After collection, the nuts are sun-dried and sent for further processing. This sustainable farming method provides livelihood to thousands of farmers and supports local agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashewFarming;
