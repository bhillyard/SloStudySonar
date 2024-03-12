import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      password: {
        type: String,
        required: false,
        trim: true,
        validate: {
            validator: function(value) {
                return value.length >= 6;
            },
            message: 'Password must be at least 6 characters long'
        }
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(value) {
                // Basic email validation
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format'
        }
      },
      displayName: {
        type: String,
        required: true,
        trim: true
      },
      firstName: {
        type: String,
        required: true,
        trim: true
      },
      lastName: {
        type: String,
        required: true,
        trim: true
      },
      major: {
        type: String,
        required: false,
        trim: true
      },
      favoriteSpaces:{
        type: Array,
        required: true,
        default: []
      },
      sessions:{
        type: Array,
        required: true,
        default: []
      },
      role:{
        type: String,
        required: true,
        default: "basic"
      },
    },
    { collection: "users_list" }
  );

  const User = mongoose.model("User", UserSchema);

  export default User;