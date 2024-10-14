import React, { useState } from "react";

const FormLayout = () => {
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

  const handleClear = () => {
    setFormData({
      name: "",
      surname: "",
      email: "",
      check: false,
      gender: "",
      hobby: [],
      note: "",
      status: "status",
    });
    setIsSubmitted(false); // Reset submission state as well
  };



  // const (e) => setFormData("note" ,e.target.value) = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("formDataSummit", formData);
  // };

  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set submitted state to true
    console.log("formDataSummit", formData);
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
    <div className=" grid grid-cols-2  bg-gray-100 h-screen">
      {/* Form Section */}

      <div className="items-center justify-center card bg-base-100  shadow-2xl m-9">
        
      <div className="pb-9 text-4xl ">    Profile management      </div>
        <form onSubmit={handleSubmit}>
          


            <div className="mb-4 grid grid-cols-2 gap-4 ">

              <label className="input input-bordered flex items-center">
                Name
                <div className="divider divider-horizontal m-2"></div>
                <input
                  type="text"
                  className="grow"
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

              <label className="input input-bordered flex items-center ">
                Surname
                <div className="divider divider-horizontal m-2"></div>
                <input
                  type="text"
                  className="email"
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
                <div className="divider divider-horizontal m-2"></div>
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

            {/* Checkbox */}
            <div className="form-control">
              <label className="cursor-pointer label w-fit gap-4 ml-2 mb-4">
                <input
                  name="check"
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  value={formData.check}
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
              {/* Gender Radio Buttons and Hobbies Checkboxes */}
              <div className="grid grid-cols-2 gap-4 mb-1">
                <div className="mb-1">Gender</div>
                <div className="mb-1">Hobbies</div>
              </div>

              <div className="flex mb-5">
                {/* Radio Buttons */}
                <div className="w-1/2 flex">
                  <label className="label gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="radio radio-primary"
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

                {/* Hobbies Checkboxes */}
                <div className="w-1/2 flex">
                  <div className="form-control">
                    <label className="label cursor-pointer gap-1">
                      <input
                        type="checkbox"
                        value="Game"
                        checked={formData.hobby.includes("Game")}
                        className="checkbox checkbox-primary"
                        onChange={handleCheckboxChange}
                      />
                      <span className="label-text ">Game</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-1">
                      <input
                        type="checkbox"
                        value="Music"
                        checked={formData.hobby.includes("Music")}
                        className="checkbox checkbox-primary"
                        onChange={handleCheckboxChange}
                      />
                      <span className="label-text ">Music</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-1">
                      <input
                        type="checkbox"
                        value="Paint"
                        checked={formData.hobby.includes("Paint")}
                        className="checkbox checkbox-primary"
                        onChange={handleCheckboxChange}
                      />
                      <span className="label-text ">Paint</span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer gap-1">
                      <input
                        type="checkbox"
                        value="Sport"
                        checked={formData.hobby.includes("Sport")}
                        className="checkbox checkbox-primary"
                        onChange={handleCheckboxChange}
                      />
                      <span className="label-text ">Sport</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <div className="mb-4">
              <select
                className="select select-bordered w-full"
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
            {/* Input Note */}
            <label>
              <span className="flex w-full mb-2">Note</span>

              <textarea
                type="text "
                className="grow textarea textarea-bordered flex w-full mb-4"
                value={formData.note}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    note: e.target.value,
                  }))
                }
              />
            </label>
            {/* Buttons */}
            <div className="flex justify-end gap-2 ">
              <button
                type="reset"
                className="btn btn-primary"
                onClick={handleClear}
              >
                Clear
              </button>
              <button type="submit" onClick={handleClear} className="btn btn-primary ">
                Submit
              </button>
            </div>

        </form>
      </div>

      {/* Result Section */}
      <div className="p-2 bg-gray-100 grid grid-cols-2 ">
      {isSubmitted && ( // Show this section only after form is submitted
          <div className="card bg-base-100 shadow-xl h-fit m-3">
            <div className="card-body">
              <div className="p-4 bg-base-100">
                <div className="grid grid-cols-2 gap-4">
                  <h1 className="text-2xl font-semibold mb-4">User</h1>

                  {/* Delete button aligned to the right */}
                  <div className="grid justify-end pr-3 pb-3">
                    <button
                      className="btn p-3 btn-outline btn-error "
                      value="delete"
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

                  {/* User details */}
                  <p>Name : {formData.name || "-"}</p>
                  <p>Surname : {formData.surname || "-"}</p>
                  <p>Email : {formData.email || "-"}</p>
                  <p>Remember : {formData.check ? "Yes" : "No"}</p>
                  <p>Gender : {formData.gender || "-"}</p>
                  <p>
                    Hobbies :{" "}
                    {formData.hobby.length > 0
                      ? formData.hobby.join(", ")
                      : "-"}
                  </p>
                  <p>Status : {formData.status || "-"}</p>
                  <p>Note : {formData.note || "-"}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default FormLayout;
