async function submitData(data) {
  setSubmitProgress(true);
  try {
    console.log(data);
    const formData = new FormData();
    const fields = Object.keys(data);

    fields.forEach((key) => {
      const value = data[key];
      console.log(key, value);

      if (
        [
          "licence",
          "credentials",
          "countries_lived_in",
          "languages_spoken",
          "treatable_conditions",
          "techniques_of_expertise",
        ].includes(key)
      ) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else {
        formData.append(key, value);
      }
    });

    const response = await submitTherapistSignup(formData);
    if (response.data.success) {
      setError(false);
    }
  } catch (error) {
    // console.log(error.response.data);
    if (error?.response?.data?.errors) {
    } else {
      setError(true);
    }
    console.error("Error submiting form", error);
  } finally {
  }
}
