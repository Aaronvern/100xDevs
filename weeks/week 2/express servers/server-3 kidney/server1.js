const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      }
    ]
  }
];

// Checking kidneys information
app.get("/", (req, res) => {
  const aaronsKidneys = users[0].kidneys;
  const noOfaaronsKidneys = aaronsKidneys.length;

  const healthResult = users[0].kidneys.filter(checkHealth);

  const noOfHealthyKidneys = healthResult.length;

  function checkHealth(kidney) {
    return kidney.healthy ? true : false;
  }

  const noOfUnhealthyKidneys = noOfaaronsKidneys - noOfHealthyKidneys;

  res.json({
    msg:" aarons kidney status",
    noOfaaronsKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

// Adding new Kidney
app.post("/add", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({
    msg: "New Kidney Added!",
  });
});

// Replacing all unhealthy kidneys
app.put("/replace", (req, res) => {
  users[0].kidneys.forEach(replaceUnhealthy);

  function replaceUnhealthy(kidney) {
    if (kidney.healthy === false) {
      kidney.healthy = true;
    }
  }

  res.json({ msg: "Kidney Replaced!" });
});

// Removing all unhealthy kidneys
function isThereAtLeastOneUnhealthyKidney() {
  return users[0].kidneys.some((kidney) => !kidney.healthy);
}

app.delete("/remove", (req, res) => {
  if (isThereAtLeastOneUnhealthyKidney()) {
    users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);
    res.json({ msg: "Unhealthy Kidneys Removed!" });
  } else {
    res.status(411).json({ msg: "No Unhealthy Kidneys Found!" });
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000!");
});
