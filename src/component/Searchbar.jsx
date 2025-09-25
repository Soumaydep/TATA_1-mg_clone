const SearchBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-between bg-slate-300 ">
        <span className="me-5">📍</span>
        <p>Kolkata</p>
      </div>

      <input
        type="text"
        className="input-group form-control arial-label aria-describedby"
        style={{maxWidth: '700px'}}
        placeholder="Search for Medicines and Health Products"
      />
      <div className="d-flex  me-3 align-items-center">
        <p className="me-3 text-muted">⚡Quick Buy! Get 15% off on medicines*</p>
         <button className="cursor-pointer btn btn-warning text-white">
          Quick order
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
