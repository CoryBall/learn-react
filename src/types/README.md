# Types backing the API we're calling

For a typed response for when we call the API, I just copied the REST schema from [here](https://rickandmortyapi.com/documentation/#character-schema) into TypeScript types.

For a paginated response, something like getting a list of characters, the return type from the API will be `APIResult<APICharacter>`