# URL Shortener API Documentation

Jess.ar is an URL shortener application. This API allows you to shorten and expand URLs, as well as redirect to the original URLs using the provided alphanumeric codes.

## Endpoints

### Shorten URL

Shortens a valid URL and returns an 8-character alphanumeric code that identifies the shortened URL.

- **URL:** `/shorten`
- **Method:** `POST`
- **Parameters:**
  - `url` (string, required): The valid URL that you want to shorten.
- **Response:**
  - `id` (string): An 8-character alphanumeric code representing the shortened URL.
- **Example:**
  ```http
  POST /shorten
  Content-Type: application/json

  {
    "url": "https://www.example.com/very-long-url-to-shorten"
  }
  ```
  **Response:**
  ```json
  {
    "id": "AbCdEfGh"
  }
  ```

### Expand URL

Expands a previously shortened URL by providing the corresponding 8-character alphanumeric code.

- **URL:** `/expand`
- **Method:** `GET`
- **Parameters:**
  - `code` (string, required): The 8-character alphanumeric code obtained from the shortened URL.
- **Response:**
  - `url` (string): The original URL that was shortened.
- **Example:**
  ```http
  GET /expand?code=AbCdEfGh
  ```
  **Response:**
  ```json
  {
    "url": "https://www.example.com/very-long-url-to-shorten"
  }
  ```

### Redirect to Original URL

Redirects to the original URL based on the provided 8-character alphanumeric code.

- **URL:** `/:code`
- **Method:** `GET`
- **Parameters:**
  - `code` (string): The 8-character alphanumeric code obtained from the shortened URL.
- **Response:**
  - Redirects to the original URL if found, or returns an error message if the code is not valid.
- **Example:**
  ```http
  GET /AbCdEfGh
  ```
  
## Error Handling

- If an invalid URL is provided for shortening, the API will return an appropriate error message.
- If an invalid or non-existent code is provided for expansion or redirection, the API will return an error message indicating that the URL could not be found.

## Rate Limits

The API has rate limiting in place to prevent abuse. Users exceeding the rate limits will receive a response with an appropriate error message.

## Conclusion

With the URL Shortener API, you can easily shorten, expand, and redirect URLs using simple endpoints. This can be useful for sharing long URLs in a concise manner.
