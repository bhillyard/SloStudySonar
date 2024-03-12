import mongoose from "mongoose";

const timeFormatValidator = {
    validator: function(value) {
        const pattern = /^\d{2}:\d{2}-\d{2}:\d{2}$/;
        return pattern.test(value);
    },
    message: props => `${props.value} is not in the correct format. It should be in the format "00:00-00:00`
};

const StudySpaceSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },
      photo: {
        type: String,
        required: false,
        trim: true
      },
      location: {
        type: String,
        required: true,
        trim: true
      },
      operatingHours: {
        type: String,
        required: true,
        validate: timeFormatValidator
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      onCampus: {
        type: Boolean,
        required: true
      },
    },
    { collection: "studySpace_list" }
  );

  const StudySpace = mongoose.model("StudySpaceSchema", StudySpaceSchema);

  export default StudySpace;