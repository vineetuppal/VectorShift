# VectorShift 

This repository contains my implementation of the VectorShift full-stack technical project. The project includes a React-based frontend and a Python FastAPI backend, demonstrating node abstraction, styling, text node logic, and backend integration.

## Features

### 1. Node Abstraction
- Created a `BaseNode.js` template to simplify the creation of new nodes.
- Reduced code redundancy by abstracting shared logic and styles.
- Added five new node types to demonstrate the flexibility of the abstraction.

### 2. Styling
- Designed a cohesive UI with consistent styles for all nodes and components.
- Styled the `MiniMap` component to match the overall theme.
- Used Tailwind CSS for responsive and visually appealing designs.

### 3. Text Node Logic
- Enabled dynamic resizing of the text input area based on the content.
- Implemented JavaScript variable detection using regex (e.g., `{{variable}}`) and dynamically added handles for each variable on the left side of the node.

### 4. Backend Integration
- Integrated the frontend with a FastAPI backend.
- Updated the `/pipelines/parse` endpoint to calculate the number of nodes and edges and check if the graph is a Directed Acyclic Graph (DAG).
- Triggered an alert on the frontend displaying the backend response, including `num_nodes`, `num_edges`, and `is_dag`.

### Technologies Used

#### Frontend:
- **React**: For building the user interface.
- **React Flow**: For creating and managing interactive node-based workflows.
- **Tailwind CSS**: For styling and creating a responsive design.
- **JavaScript (ES6)**: For scripting and functionality.

#### Backend:
- **FastAPI**: For creating the backend API.
- **Python**: As the backend programming language.

#### Tools and Libraries:
- **NPM**: For managing frontend dependencies.
- **Uvicorn**: For running the FastAPI server.
- **Git**: For version control.


