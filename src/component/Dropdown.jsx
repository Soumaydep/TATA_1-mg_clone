const Dropdown = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Health Resource Center
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            All Diseases
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            All Medicines
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Medicines by Therapeutic Class
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Vitamins & Nutrition
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Multi Vitamins
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Global Suplliments
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Minerals
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Fitness Supplements
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Whey Protien
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Fat Burner
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Sports
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Stomach Care
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Constipation
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Acidity
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Indigestion
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Feminine Care
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Sanitary Pads
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Breast Pumps
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Hair Removal
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Healthy Snacks
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Oats
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Honey
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Peanut Butter
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Nutritional Drinks
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Green Tea
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Adult Daily Nutrition
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Kids Nutrition
          </a>
        </li>
      </ul>

      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "white",
          color: "black",
          borderColor: "white",
        }}
      >
        Diabetes
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Blood Glucose Monitor
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Test Strips and Lancets
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Sugar Substitute
          </a>
        </li>
      </ul>

      <div
        style={{
          flexBasis: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            backgroundColor: "white",
            color: "black",
            borderColor: "white",
          }}
        >
          Immunity Boosters
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Chawanprash
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Antioxidant Supplements
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Ayurvedic Supplements
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
