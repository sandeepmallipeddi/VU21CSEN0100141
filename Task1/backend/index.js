const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

const port = 9876;
const WINDOW_SIZE = 10;

// To store numbers in memory
let numbersWindow = [];

// Simulate API responses
const MOCK_API_RESPONSES = {
  p: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29],
  f: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
  e: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  r: [5, 9, 15, 22, 31, 42, 56, 71, 89, 103]
};

// Helper function to calculate the average
function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Endpoint to handle the request for numbers by type
app.get('/numbers/:numberid', async (req, res) => {
  const numberId = req.params.numberid;
  const apiResponse = MOCK_API_RESPONSES[numberId];

  if (!apiResponse) {
    return res.status(400).json({ message: 'Invalid number ID' });
  }

  // Simulate fetching numbers
  const fetchedNumbers = apiResponse;

  // Filter out duplicates and add new numbers to the window
  const newNumbers = fetchedNumbers.filter(num => !numbersWindow.includes(num));
  numbersWindow = [...numbersWindow, ...newNumbers].slice(-WINDOW_SIZE);

  // Calculate the average of the numbers in the window
  const average = calculateAverage(numbersWindow);

  // Prepare the response
  const response = {
    windowPrevState: [...numbersWindow].slice(0, -newNumbers.length),
    windowCurrState: [...numbersWindow],
    numbers: fetchedNumbers,
    avg: average
  };
  console.log(response)

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Average Calculator microservice running on http://localhost:${port}`);
});
