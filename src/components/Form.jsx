import React, { useState } from "react";

const FormLayout = () => {
  const [showData, setShowData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    check: false,
    gender: "",
    hobby: [],
    note: "",
    status: "",
  });

  const handleDelete = (index) => {
    const newData = showData.filter((_, i) => i !== index);
    setShowData(newData);
  };

  const handleClear = () => {
    setFormData({
      name: "",
      surname: "",
      email: "",
      check: false,
      gender: "",
      hobby: [],
      note: "",
      status: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClear();
    setShowData([...showData, formData]);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      hobby: checked
        ? [...prevData.hobby, value] // Add hobby if checked
        : prevData.hobby.filter((hobby) => hobby !== value), // Remove hobby if unchecked
    }));
  };

  return (
    <div className="bg-gray-100 h-auto min-h-screen">
    <div className="flex flex-col lg:flex-row ">
      {/* Form Section */}
      <div className="w-full  lg:fixed ml-24 md:w-2/5 flex-shrink-0">
        <div className="card bg-base-100 shadow-2xl mx-4 lg:mx-11 my-10 lg:my-20 p-8 lg:p-20 items-center">
          <div className="pb-6 lg:pb-9 text-2xl lg:text-4xl">Profile Management</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <label className="input input-bordered flex items-center">
                Name
                <div className="divider divider-horizontal m-2"></div>
                <input
                  type="text"
                  className="grow "
                  value={formData.name}
                  placeholder="Type here"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                />
              </label>
  
              <label className="input input-bordered flex items-center">
                Surname
                <div className="divider divider-horizontal m-2 "></div>
                <input
                  type="text"
                  className="grow"
                  value={formData.surname}
                  placeholder="Type here"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      surname: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
  
            <div className="mb-4">
              <label className="input input-bordered flex items-center">
                Email
                <div className="divider divider-horizontal m-2 "></div>
                <input
                  type="text"
                  className="grow"
                  value={formData.email}
                  placeholder="Your@site.com"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
  
            <div className="form-control">
              <label className="cursor-pointer label w-fit gap-4 ml-2 mb-4">
                <input
                  name="check"
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  checked={formData.check}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      [e.target.name]: e.target.checked,
                    }))
                  }
                />
                <span className="label-text">Remember me</span>
              </label>
            </div>
  
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4 mb-1">
                <div className="mb-1">Gender</div>
                <div className="mb-1">Hobbies</div>
              </div>
  
              <div className="flex flex-wrap lg:flex-nowrap mb-5">
                {/* Gender */}
                <div className="w-full lg:w-1/2 flex mb-4 lg:mb-0">
                  <label className="label gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="radio radio-primary"
                      checked={formData.gender === "male"}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <span className="label-text">Male</span>
                  </label>
                  <label className="label gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="radio radio-primary"
                      checked={formData.gender === "female"}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <span className="label-text">Female</span>
                  </label>
                  <label className="label gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      className="radio radio-primary"
                      checked={formData.gender === "other"}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          [e.target.name]: e.target.value,
                        }))
                      }
                    />
                    <span className="label-text">Other</span>
                  </label>
                </div>
  
                {/* Hobbies */}
                <div className="w-full lg:w-1/2 flex flex-wrap">
                  <label className="label cursor-pointer gap-1">
                    <input
                      type="checkbox"
                      value="Game"
                      checked={formData.hobby.includes("Game")}
                      className="checkbox checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="label-text">Game</span>
                  </label>
                  <label className="label cursor-pointer gap-1">
                    <input
                      type="checkbox"
                      value="Music"
                      checked={formData.hobby.includes("Music")}
                      className="checkbox checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="label-text">Music</span>
                  </label>
                  <label className="label cursor-pointer gap-1">
                    <input
                      type="checkbox"
                      value="Paint"
                      checked={formData.hobby.includes("Paint")}
                      className="checkbox checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="label-text">Paint</span>
                  </label>
                  <label className="label cursor-pointer gap-1">
                    <input
                      type="checkbox"
                      value="Sport"
                      checked={formData.hobby.includes("Sport")}
                      className="checkbox checkbox-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span className="label-text">Sport</span>
                  </label>
                </div>
              </div>
            </div>
  
            {/* Status Dropdown */}
            <div className="mb-4">
              <select
                className="select select-bordered w-full"
                value={formData.status}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    status: e.target.value,
                  }))
                }
              >
                <option disabled selected>
                  Status
                </option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorce">Divorce</option>
              </select>
            </div>
  
            {/* Note */}
            <div className="mb-4">
              <textarea
                type="text"
                className="textarea textarea-bordered w-full"
                value={formData.note}
                placeholder="Note"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    note: e.target.value,
                  }))
                }
              />
            </div>
  
            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button type="reset" className="btn btn-primary" onClick={handleClear}>
                Clear
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* Result Section */}
      {/* p-2 bg-gray-100 w-screen h-fit grid grid-cols-2 pl-36 */}
      <div className="w h-fit ml-auto lg:w-3/5 p-2 grid grid-cols-1 md:grid-cols-2 pl-36 ">
        {showData.map((item, index) => (
          <div className="card bg-base-100 shadow-xl h-fit m-3 mx-2">
            <div className="card-body ">
              <div className="grid gap-4 break-words">
                <div className="grid grid-cols-2 justify-end mb-3 ">
                  <h1 className="text-2xl font-semibold mb-4">User {index + 1}</h1>
                  <button
                    className="btn btn-outline btn-error"
                    onClick={() => handleDelete(index)}
                  >
                                            <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF605B"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <p>Name : {item.name || "-"}</p>
                  <p>Surname : {item.surname || "-"}</p>
                  <p>Email : {item.email || "-"}</p>
                  <p>Remember : {item.check ? "✔" : "✘"}</p>
                  <p>Gender : {item.gender || "-"}</p>
                  <p>Hobbies : {item.hobby.join(", ") || "-"}</p>
                  <p>Status : {item.status || "-"}</p>
                  <p>Note : {item.note || "-"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default FormLayout;
