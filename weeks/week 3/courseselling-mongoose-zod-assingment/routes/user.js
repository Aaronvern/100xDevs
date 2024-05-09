const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../database/indexdb");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  // Once user hits this route, a new user account will be created using the username and password.
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  // Check if a user already exists with same credentials.
  if (!newUser) {
    // If exists, send the error response.
    res.status(500).json({
      message: "User already exists!",
    });
  } else {
    // If doesen't exists, save it in the database and send the success response.
    await newUser.save();
    res.status(200).json({
      message: "User created successfully!",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  // This route returns all the courses available.

  // Use the .find() method to search the courses. This method returns a promise.
  // If the courses are found, the promise will resolve and return the courses as response.
  const courses = await Course.find({})
    .then((courses) => {
      res.status(200).json(courses);
    })
    .catch((error) => {
      // If the courses are not found, send the error response.
      res.status(500).json({ message: "Something went wrong!" });
    });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  // This route returns the current course purchased by the user.

  // Get the username from the headers and then update the purchased course array of that user in .
  const user = await User.updateOne(
    {
      username: req.headers.username,
    },
    {
      // Afterthe user purchases the course, grab the course by its ID and add it to the user's purchased courses.
      $push: {
        purchasedCourses: req.params.courseId,
      },
    }
  );
  res.status(200).json({
    message: "Course purchased successfully!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
 
 

  const user = await User.findOne({
    username: req.headers.username,
  });
  
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  
  if (!courses) {
    
    res.status(500).json({
      message: "No courses found!",
    });
  } else {
    
    res.status(200).json({
      courses: courses,
    });
  }
  
});

module.exports = router ;