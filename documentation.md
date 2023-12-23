# Technology Stack
- React/Vite + React
- Bootstrap
- ContextAPI

## Overview
The Kangan Board project is a web application built using React with Vite as the build tool. The project uses Bootstrap for styling and utilizes ContextAPI for centralized state management and business logic. This combination of technologies gives clear and maintainable code.

## Features

### Responsive Design
The web application is designed to be responsive across various screen sizes.

### Dynamic Ticket Grouping
Tickets can be dynamically grouped based on selected criteria. Grouping options include:
- **By Status:** Tickets are grouped based on their status.
- **By User:** Tickets are grouped based on their user.
- **By Priority:** Tickets are grouped based on their priority level, which has mapping as 4 – Urgent, 3 – High, 2 – Medium, 1 – Low, 0 - No priority.

### Dynamic Ticket Ordering
Tickets can be dynamically ordered based on selected criteria. Ordering options include ticket properties like priority and title. Note that this feature is partially implemented.

### Modular Components
Components are separated according to functional requirements, ensuring a modular and maintainable code.

### Centralized Business Logic
Business logic is centralized using ContextAPI, enhancing code clarity and maintainability.

