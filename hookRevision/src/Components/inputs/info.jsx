function info() {
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter your first name"
          className="p-4 m-3"
          value=""
          onChange={() => {}}
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="p-4 m-3"
          value=""
        />
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-4 m-3"
          value=""
        />
        <input
          type="text"
          placeholder="Enter your Phone"
          className="p-4 m-3"
          value=""
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-300 rounded-lg p-3">Submit</button>
      </div>
      <hr className="m-2" />
    </>
  );
}
export default info;
