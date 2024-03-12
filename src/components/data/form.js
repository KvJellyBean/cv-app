import profile from "../../assets/profile.png";

const form = {
  Profile_Picture: {
    dataKey: "Profile_Picture",
    legend: "Profile Picture",
    image: true,
    description:
      "Adding a photo to your CV can be a great way to personalize your application and make a positive first impression. When uploading your photo, make sure it is a clear and recent headshot that shows your face in a professional manner. When taking your photo, dress professionally and consider the background and lighting. A neutral background and good lighting can help to highlight your features and present you in the best possible light. Remember, your photo is an important part of your CV, so take the time to choose a high-quality image that represents you in a professional and approachable manner. When you're done, the next step is to start filling your application with your personal information, good luck!",
    addButton: null,
    formInputs_1: [
      {
        type: "file",
        name: "picture",
        id: "pictureInput",
        label: "Upload picture*",
        placeholder: null,
        value: profile,
      },
    ],
  },
  General_Information: {
    dataKey: "General_Information",
    legend: "General Information",
    image: null,
    description:
      "This is a critical part of your CV as it gives the potential employer a glimpse of who you are. This is an opportunity for you to introduce yourself, highlight your skills, and provide a brief summary of your career goals.",
    addButton: null,
    formInputs_1: [
      {
        type: "text",
        name: "fullName",
        id: "fullNameInput",
        label: "Full Name*",
        placeholder: "Enter your full name",
        value: "",
      },
      {
        type: "text",
        name: "profession",
        id: "professionInput",
        label: "Profession*",
        placeholder: "Enter your profession (e.g. Full Stack Developer)",
        value: "",
      },
      {
        type: "text",
        name: "address",
        id: "addressInput",
        label: "Address*",
        placeholder: "Enter your address",
        value: "",
      },
      {
        type: "tel",
        name: "phone",
        id: "phoneInput",
        label: "Phone*",
        placeholder: "Enter your phone number (e.g. +1 123 456 7890)",
        value: "",
      },
      {
        type: "email",
        name: "email",
        id: "emailInput",
        label: "Email*",
        placeholder: "Enter your email (e.g. example@gmail.com)",
        value: "",
      },
      {
        type: "textarea",
        name: "profileSummary",
        id: "profileTextarea",
        label: "Profile Summary*",
        placeholder:
          "Briefly introduce yourself and highlight your key skills and experiences relevant to the position. Show how your background aligns with the company's needs and objectives.",
        value: "",
      },
    ],
  },
  Education: {
    dataKey: "Education",
    legend: "Education",
    image: null,
    description:
      "The education demonstrates your commitment to learning and your willingness to acquire new skills. If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any formal education, consider including any relevant certifications or training you may have received.",
    addButton: {
      label: "Add more education",
    },
  },
  Work_Experience: {
    dataKey: "Work_Experience",
    legend: "Work Experience",
    image: null,
    description:
      "Showcase your professional accomplishments and demonstrate your ability to contribute to an organization. In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it.",
    addButton: {
      label: "Add more experience",
    },
  },
  Skills: {
    dataKey: "Skills",
    legend: "Skills",
    image: null,
    description:
      "Here is an opportunity to showcase your relevant abilities and qualifications for the job. Be specific about your skills and match them with the requirements of the job you're applying for. Include technical skills, communication skills, and problem-solving abilities.",
    addButton: {
      label: "Add skill",
    },
  },
  Languages: {
    dataKey: "Languages",
    legend: "Languages",
    image: null,
    description:
      "By listing the languages you know and your proficiency level in each, you can demonstrate your ability to communicate effectively with people from different cultures and increase your appeal to potential employers.",
    addButton: {
      label: "Add skill",
    },
  },
};

export default form;
