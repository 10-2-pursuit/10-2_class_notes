# React CRUD

## Learning objectives

By the end of this lesson, you should be able to:

- Build an Index page that loads all of a particular resource.
- Build an individual Show page that loads a single resource.
- Allow for the destruction of an individual resource through user interaction.

---

## Getting started

Start by forking and cloning the React CRUD Lab that is linked in Canvas it should be called `lab-react-crud`

Follow the instructions in that repository to get the application up and working.

- Then fork and clone the API that is linked in the lab. You'll have to open another new tab and keep that application running throughout the build along with the React application.

> **Note:** The second application will be a server on your computer. This server will mimic a third-party API, but instead of the resource being somewhere on the internet, it will be on your machine. You will not need to edit the code in this application to complete the build.

In class you will build out the `shows` resource. During lab, you'll use what you learned in class to build out the `movies` resource.

## Guiding questions and app exploration

First, once your applications are up and running, review the code in the React CRUD Lab repository. Answer the following questions.

- Take a look at the `src/App.js` file. React Router has already been set up for you. How do you know?

- What is the `.env.development` file? You can view [this page](https://create-react-app.dev/docs/adding-custom-environment-variables/) to get some help.

- Take a look at the `src/components/common` directory. What kind of components are in this folder?

- Take a look at both `src/components/common/Nav.js` and `src/App.js`. What routes are available to the user in this application?

- Take a look at both `src/components/shows`.

The app will have the following views and actions once you have completed the build. Some of these views are already available:

|       route       |      view      | action | top-level component |
| :---------------: | :------------: | :----: | :-----------------: |
|        `/`        |   home page    |  none  |   `src/home/Home`   |
|     `/shows`      |  shows index   |  GET   |    `ShowsIndex`     |
|   `/shows/:id`    |   shows show   |  GET   |       `Show`        |
|   `/shows/new`    | shows new form |  none  |    `ShowNewForm`    |
| `/shows/:id/edit` |   shows edit   |  GET   |   `ShowsEditForm`   |
|     `/shows`      |      none      |  POST  |   `ShowsNewForm`    |
|   `/shows/:id`    |      none      | DELETE |   `ShowsNewForm`    |
|    `/shows/:id    |      none      |  PUT   |   `ShowsEditForm`   |

If there is no `GET` action, that page will not load any data. The home page and new form are examples where no data is needed for the view.

When there is a `GET` action, the app must `GET` data from the server and then load it into the view. The index, show, and edit form views are examples of data needed to complete the view.

To complete CRUD, three more actions are needed: `POST` (create), `PUT` (edit), `DELETE` (delete/destroy). These actions will also send requests to the server, but instead of getting data, they will modify data by creating, updating or deleting. These actions are typically represented as buttons and links, they do not have a view. Once the action is complete, the user will typically be rerouted to another view.

In this lesson, the plan is to build out the following pages:

1. An _Index_ page for television shows.
1. A _Show_ page for television shows.


### Index page

The goal will be to build the page to look like the image below.


1. This will be the `ShowsIndex` component.
2. This will be a `ShowsListing` component.

### Show Page

The show page will show data for one TV show. It will also have a button that will allow the user to delete the show. The user will reroute to the index view when the show is successfully deleted.

### Handling an error

Before building the page, handling any potential errors is a good idea. For example, what should the user be shown if the API cannot be reached?

In this case, show them a generic error message

## This Weeks TEAMS

* Erick Tolentino, Mikal Wazeerud-Din, Sung Yi ,
* Tonesha Rose, Anthony Huarneck, Elisaul Batista ,
* Emily Mohr, Anile Choice,Isaiah Derosiers,
* Alexander Tsiklidis, Aisha Kleemoff, Winder Joel Marte ,
* Addis Jackson, Jalal Jonaid, Abel Vargas,,
* Kanique Cox, Davon Bridgett, Michael Caldwell ,
* Shanice Griffin, Genesis Lara, Joseph Carter ,
* Dwayne Jones,  Jefferson Chua,Nicole Slater ,
* Keith Camacho, James Edmond
