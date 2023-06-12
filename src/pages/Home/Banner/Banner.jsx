const Banner = () => {
  return (
    <div style={{ height: "600px", overflow: "hidden", position: "relative" }}>
      <img
        className="img-fluid w-100"
        style={{ objectFit: "cover", height: "100%" }}
        src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        alt="Banner"
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
          color: "white",
        }}
      >
        <h1>Welcome to our Kitchen</h1>
        <p>Learn more about what special we make</p>
        <button className="btn btn-light">View Menu</button>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5,
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default Banner;
