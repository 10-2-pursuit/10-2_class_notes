# Weather App Design Challenge

## Objective

In this design challenge, you will have 20 minutes to work as a group to design a React application that consumes a weather API and displays weather data for a specific location. You will create a wireframe and a diagram of components, identify which components need state, and determine how state and props will be passed between components.  Each group will have one driver and one presenter.  The driver will be responsible for creating a [miro](https://www.miro.com) board that contains all relevant diagrams.  

**Note:** This is not a _coding challenge_. The purpose of this activity is to understand at a high level how components, state, and props work together and begin the process of ideating an app with a group.

## Steps
### Wireframing:

As a group, head to [miro](https://www.miro.com) brainstorm and create a wireframe for the weather application. Not which components will be laid out in which parts of the dom.  Assume that this a single page application and your content should be oranized with CSS grid in mind.

### Component Diagram:

Design a diagram of components for the weather application. Identify the major components needed for the app and how they will interact with each other. Determine the component hierarchy and how data will flow between components.

### Identify Components Needing State:

Discuss and identify which components in your diagram will need to hold state. State should include data that can change during the application's lifecycle, such as the weather data fetched from the API.

### Passing State with Props:

Determine which components will pass state as props to their child components. Identify the data that needs to be passed down the component tree and establish a clear hierarchy for data flow.



## Presentation:

Each group will present their design to the class. Explain your wireframe, component diagram, and how you plan to manage state and pass props between components. Discuss any design decisions you made and the reasoning behind them.

## Components Needed
 - SearchField Component:

This component will include an input field where users can enter the location (city name) they want to check the weather for. Upon submitting the location, it will trigger the API call to fetch weather data.

**Note:**  we have not yet covered how to connect state to a form.  You are not required to diagram state on the form.  Simply include the form in your components and wireframes.

- WeatherDetails Component:

This component will display the current weather details for the specified location. It will include information such as the current temperature, weather description (e.g., cloudy, sunny), and humidity.

- ForecastList Component:

The ForecastList component will display a list of weather forecasts for the next five days. Each list item will include the date, minimum and maximum temperatures, and a brief weather description for that day.

- Main Page Component:

The Main Page component will act as the parent component that holds the SearchField, WeatherDetails, and ForecastList components. It will manage the state related to the location entered in the SearchField and the weather data fetched from the API. It will pass the necessary state and update functions as props to the child components.

- App Component:

The App component will be the top level component that renders the Main Page component. It can handle any app-level tasks, such as global styling and layout. 

**Note:**  we have not yet covered API calls in react.  For this project, assume that your API call happens when the user requests data from the form and that the `state` of `<App />` will update on each call.

- Optional - Loading and Error Handling Components:

Optionally, you can include loading and error handling components to provide a better user experience. When fetching weather data, you can show a loading component to indicate that data is being fetched, and in case of errors, you can display an error component with a meaningful error message.

## Example Weather Data

Assuming the weather API returns data in the following format:

```json
{
  "city": "New York",
  "country": "US",
  "current": {
    "temperature": 27,
    "weatherDescription": "Cloudy",
    "humidity": 80
  },
  "forecast": [
    {
      "date": "2023-08-01",
      "temperature": {
        "min": 24,
        "max": 31
      },
      "weatherDescription": "Partly Cloudy"
    },
    {
      "date": "2023-08-02",
      "temperature": {
        "min": 23,
        "max": 29
      },
      "weatherDescription": "Sunny"
    },
    // ... more forecast data for the next five days ...
  ]
}
```


