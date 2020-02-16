# Components (3)

The project is broken into three components, App, AddressForm, and ElectionInfo

## App

The App component loads the other two components AddressForm and ElectionInfo and stores the results from the searches in its state. The AddressForm will always load but ElectionInfo will only load if a search returns results. There are two functions in the App component.

### Functions (2)

#### handleSubmit

- Description: Submits User inputted data to the API route to find elections in their area. The function currently only submits city and state.
- Parameters: None
- Returns: If results are returned from the search this function will set them to App component's state

#### generateMessage

- Description: Generates an appropriate message based on the results returned from the search
- Parameters: None
- Returns: While the results are being fetched it will display a Searching message. Otherwise if results are returned from the search this function will return an h3 tag to be rendered with how many elections are in the area or it will return one that says there are no elections.

---

## AddressForm

The AddressForm is a stateless component and is the same as the one from the Javascript template provided but converted to React. The form also imports a drop down of all the states also from the template. This component receives a handleSubmit function from the App component and only runs it when the form is submitted.

### Functions (0)

---

## ElectionInfo

The AddressForm is a stateless component and renders results given from the search results. At the moment, it only displays description, date, type, and url but the component can be expanded to display more information as needed because all of the election information is passed in.

### Functions (0)

---

# API Routes (1)

This project only consists of one api route that formats the data and calls https://api.turbovote.org/elections/upcoming

## GET /api/search/:ocdID

This endpoint is called during form submit and the parameter :ocdID expects the format 'state,city' e.g.`/api/search/${state},${city}`. The route will generate 2 actual ocdIDs and return any election results from turbovote.
