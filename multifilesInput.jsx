const [files, setFiles] = useState([...signupData.licence]);

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile && !files.some((f) => f.name === selectedFile.name)) {
    setFiles((prevFiles) => [...prevFiles, selectedFile]);
  }
};

const handleDeleteFile = (name) => {
  const newFiles = files.filter((f) => f.name !== name);
  setFiles(newFiles);
};

const handleClick = () => {
  if (files.length > 0) {
    setSignupData((prevData) => ({
      ...prevData,
      licence: files,
    }));
    setStep(10);
  } else {
    setFilled(false);
  }
};
