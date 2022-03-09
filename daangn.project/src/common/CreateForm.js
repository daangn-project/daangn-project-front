export const appendingFormData = (args) => {
  const form = new FormData();
  const formData = Object.entries(args);

  for (let k of formData) {
    const name = k[0];
    const data = k[1];
    if (name === "images") {
      data.map((img) => form.append("images", img));
    } else {
      form.append(name, data);
    }
  }
  return form;
};
