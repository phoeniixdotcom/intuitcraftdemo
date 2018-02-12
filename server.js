const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/contacts', (req, res) => {
  res.send([
    {
      "id": 0,
      "firstName": "My",
      "lastName": "Name",
      "phones": [
        {
          "type": "home",
          "number": ""
        },
        {
          "type": "work",
          "number": "8584444444"
        },
        {
          "type": "mobile",
          "number": "6195555555"
        }
      ],
      "addresses": [
        {
          "type": "home",
          "address": "12345 Some Address",
          "address2": "",
          "city": "San Diego",
          "state": "CA",
          "zipcode": "92128"
        },
        {
          "type": "work",
          "address": "4000 Ruffin Rd.",
          "address2": "Ste 150",
          "city": "San Diego",
          "state": "CA",
          "zipcode": "92123"
        }
      ]
    },
    {
      "id": 1,
      "firstName": "My",
      "lastName": "Son",
      "phones": [
        {
          "type": "home",
          "number": ""
        },
        {
          "type": "work",
          "number": ""
        },
        {
          "type": "mobile",
          "number": ""
        }
      ],
      "addresses": [
        {
          "type": "home",
          "address": "12345 Some Address",
          "address2": "",
          "city": "San Diego",
          "state": "CA",
          "zipcode": "92128"
        }
      ]
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
