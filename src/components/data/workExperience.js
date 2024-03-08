const workExpForm = [
  {
    type: "text",
    name: "companyName",
    id: "companyInput",
    label: "Company Name",
    placeholder: "Enter your company name",
    value: "",
  },
  {
    type: "text",
    name: "position",
    id: "positionInput",
    label: "Position",
    placeholder: "Enter your position",
    value: "",
  },
  {
    type: "month",
    name: "startWork",
    id: "startWorkInput",
    label: "Start Date",
    placeholder: null,
    value: "",
  },
  {
    type: "month",
    name: "endWork",
    id: "endWorkInput",
    label: "End Date",
    placeholder: null,
    value: "",
  },
  {
    type: "text",
    name: "workLocation",
    id: "workLocationInput",
    label: "Location",
    placeholder: "Enter your school location (e.g. Tokyo, Japan)",
    value: "",
  },
  {
    type: "textarea",
    name: "jobDescription",
    id: "jobTextarea",
    label: "Job Description",
    placeholder:
      "Describe responsibilities and tasks you performed in your the roles. Highlight achievements, projects, and any significant contributions. Provide specific examples to demonstrate your skills and abilities.",
    value: "",
  },
];

export default workExpForm;
