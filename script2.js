const formEl = document.forms.feedback;
const btn = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  //   const { fullname: name, type, email, description, terms } = formEl.elements;
  // (OR)
  // new FormData(formEl)

  //BackEnd API :
  const formData = new FormData(formEl);
  console.log("My Api Key is : ", formData.get("api-key"));
};

const handelFormData = (e) => {
  console.log("formdata fired");

  const formData = e.formData;

  // Methods:
  formData.append("api-key", "sdfgsth");
  console.log([...formData.entries()]);
  console.log([...formData.values()]);
  console.log(formData.get("email"));
  console.log(formData.getAll("type"));
  console.log(formData.has("gender"));
  console.log([...formData.keys()]);
  formData.set("hobbies", "Learning new things");
  console.log([...formData.values()]);
  formData.delete("terms");
  console.log([...formData.values()]);

  console.log(formData);
};

formEl.addEventListener("submit", handleSubmit);

formEl.addEventListener("formdata", handelFormData);
