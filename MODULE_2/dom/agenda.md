# DOM 7/21/12

## Quote of The Day
“If I have seen further it is by standing on the shoulders of Giants”
– Issac Newton 

## Agenda

- 7:00 - 7:05 announcements
- 7:05 - 8:35 DOM code-along
- 8:35 - 8:45 Break
- 8:45 - 10:00 Lab time / flex-time

### Key Terms
1. **DOM (Document Object Model)**: The DOM represents the structure of a web page as a tree of objects, enabling manipulation and interaction.

2. **DOM Node**: Objects within the DOM tree representing elements, attributes, or the document itself.

3. **Element**: DOM node representing an HTML or XML element tag.

4. **Selector**: String pattern used to identify specific elements in the DOM.

5. **DOM Manipulation**: Programmatically changing a web page's structure, content, or style using JavaScript.

6. **Event Handling**: Defining and responding to specific events in the web browser.

7. **DOM Traversal**: Navigating the DOM tree to access different elements or nodes.

8. **Attribute Manipulation**: Working with element attributes to provide additional information.
     

### DOM CRUD
Below is a series of helpful dom manipulation methods and their purpose

<h2>Create</h2>
<div style="display: flex;  border:2px solid">
    <table>
        <thead>
                <tr>
                <th>Method</th>
                <th>Description</th>
                </tr>
        </thead>
        <tbody>
            <tr>
                <td>document.createElement()</td>
                <td>Creates a new HTML element with the specified tag name.</td>
            </tr>
            <tr>
                <td>node.append()</td>
                <td>Appends nodes or strings as child nodes to the end of the specified node.</td>
            </tr>
            <tr>
                <td>node.prepend()</td>
                <td>Inserts nodes or strings as child nodes at the beginning of the specified node.</td>
            </tr>
            <tr>
                <td>node.before()</td>
                <td>Inserts nodes or strings as siblings before the specified node.</td>
            </tr>
                <tr>
                <td>node.after()</td>
                <td>Inserts nodes or strings as siblings after the specified node.</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Read</h2>
<div style="display: flex;  border:2px solid">
    <table>
    <thead>
        <tr>
        <th>Method</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>document.querySelector()</td>
        <td>Returns the first element that matches a specified CSS selector within the document.</td>
        </tr>
        <tr>
        <td>document.getElementById()</td>
        <td>Returns the element with the specified ID.</td>
        </tr>
        <tr>
        <td>document.getElementsByClassName()</td>
        <td>Returns a live HTMLCollection containing all elements with the specified class name.</td>
        </tr>
        <tr>
        <td>document.getElementsByName()</td>
        <td>Returns a NodeList containing all elements with the specified name attribute.</td>
        </tr>
    </tbody>
    </table>
</div>
<h2> Update / Delete</h2>
<div style="display: flex;  border:2px solid">
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Description</th>
            </tr>
    </thead>
    <tbody>
            <tr>
                <td>node.appendChild()</td>
                <td>Appends a node as the last child of a specified node.</td>
            </tr>
            <tr>
                <td>node.removeChild()</td>
                <td>Removes a child node from the specified node.</td>
            </tr>
            <tr>
                <td>node.innerText</td>
                <td>Gets or sets the textual content of the specified node.</td>
            </tr>
            <tr>
                <td>node.setAttribute()</td>
                <td>Sets the value of an attribute on the specified element.</td>
            </tr>
            <tr>
                <td>node.getAttribute()</td>
                <td>Returns the value of the specified attribute on the element.</td>
            </tr>
            <tr>
                <td>node.removeAttribute()</td>
                <td>Removes the specified attribute from the element.</td>
            </tr>
            <tr>
                <td>node.classList</td>
                <td>Provides methods for manipulating the classes on an element.</td>
            </tr>
            <tr>
                <td>classList.remove()</td>
                <td>Removes a specific class from the element.</td>
            </tr>
            <tr>
                <td>classList.add()</td>
                <td>Adds one or more classes to the element.</td>
            </tr>
            <tr>
                <td>classList.toggle()</td>
                <td>Toggles the presence of a class on the element.</td>
            </tr>
            <tr>
                <td>node.innerHTML</td>
                <td>Gets or sets the HTML content or serialized HTML of the specified node.</td>
            </tr>
            <tr>
                <td>node.id</td>
                <td>Gets or sets the ID attribute of the specified node.</td>
            </tr>
        </tbody>
    </table>
</div>


### Pairs for Today:

1. Michael Caldwell, Dwayne Jones
2. Davon Bridgett, Nicole Slater
3. Shanice Griffin, Sung Yi
4. Addis Jackson, Emily Mohr
5. Erick Tolentino, Joseph Carter
6. Elisaul Batista, Genesis Lara
7. Kanique Cox, Jefferson Chua
8. Areebur Rahman, Winder Joel Marte
9. Anthony Huarneck, Mikal Wazeerud-Din
10. Franklin Rendon-Ramirez, Ana Torres
11. Anile Choice, Alexander Tsiklidis
12. Mayi Gomez, Aisha Kleemoff
13. Jalal Jonaid, Ruslan Poptsov
14. Tonesha Rose, Keith Camacho