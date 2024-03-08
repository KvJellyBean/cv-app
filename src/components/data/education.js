const educationForm = [
  {
    type: "text",
    name: "schoolName",
    id: "schoolInput",
    label: "School*",
    placeholder: "Enter your school or institution",
    value: "",
  },
  {
    type: "text",
    name: "schoolDegree",
    id: "degreeInput",
    label: "Degree or Qualification*",
    placeholder: "Enter your degree or qualification",
    value: "",
  },
  {
    type: "month",
    name: "schoolStart",
    id: "startSchoolInput",
    label: "Start Date*",
    placeholder: null,
    value: "",
  },
  {
    type: "month",
    name: "schoolEnd",
    id: "endSchoolInput",
    label: "End Date*",
    placeholder: null,
    value: "",
  },
  {
    type: "text",
    name: "schoolLocation",
    id: "schoolLocationInput",
    label: "Location*",
    placeholder: "Enter your school location (e.g. Tokyo, Japan)",
    value: "",
  },
  {
    type: "textarea",
    name: "schoolDescription",
    id: "schoolTextarea",
    label: "School Overview",
    placeholder:
      "Briefly outline any notable achievements or describe your school experience.",
    value: "",
  },
];

export default educationForm;
