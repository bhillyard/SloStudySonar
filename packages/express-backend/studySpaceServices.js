import mongoose from "mongoose";
import studySpaceModel from "./studySpace.js";

mongoose.set("debug", true);

mongoose
    .connect("mongodb://localhost:27017/studySpace", {
        useNewUrlParse: true,
        userUnifiedTopology: true,
})
.catch((error) => console.log(error));

function getStudySpaces(title, photo, location, operatingHours, description) {
    let promise;
    if (title) {
        promise = findStudySpaceByTitle(title);
    } else if (photo) {
        promise = findStudySpaceByPhoto(photo);
    } else if (location) {
        promise = findStudySpaceByLocation(location);
    } else if (operatingHours) {
        promise = findStudySpaceByOperatingHours(operatingHours)
    } else if (description) {
        promise = findStudySpaceByDescription(description);
    } else {
        promise = studySpaceModel.find();
    }
    return promise;
}

function addStudySpace(studySpace) {
    const newStudySpace = new studySpaceModel(studySpace);
    const promise = newStudySpace.save();
    return promise;
}

function findStudySpaceById(id) {
    return studySpaceModel.findById(id);
}

function findStudySpaceByTitle(title) {
    return studySpaceModel.find({ title: title });
}

function findStudySpaceByPhoto(photo) {
    return studySpaceModel.find({ photo: photo });
}

function findStudySpaceByLocation(location) {
    return studySpaceModel.find({ location: location});
}

function findStudySpaceByOperatingHours(operatingHours) {
    return studySpaceModel.find({ operatingHours: operatingHours });
}

function findStudySpaceByDescription(description) {
    return studySpaceModel.find({ description: description });
}

function deleteStudySpace(id) {
    return studySpaceModel.findIdAndDelete(id);
}

export default {
    addStudySpace,
    getStudySpaces,
    findStudySpaceById,
    findStudySpaceByTitle,
    findStudySpaceByPhoto,
    findStudySpaceByLocation,
    findStudySpaceByOperatingHours,
    findStudySpaceByDescription,
    deleteStudySpace
}