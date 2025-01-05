from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change for production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    # Get the JSON body from the request
    data = await request.json()

    # Log the incoming data to the console
    print("Received data:", data)

    # Extract nodes and edges from the data
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    # Calculate number of nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Function to check if the graph is a DAG using DFS
    def is_dag(nodes, edges):
        # Build an adjacency list for the graph
        adj_list = {node['id']: [] for node in nodes}
        for edge in edges:
            adj_list[edge['source']].append(edge['target'])
        
        # Helper function to perform DFS and detect cycles
        def dfs(node, visited, stack):
            visited.add(node)
            stack.add(node)
            
            for neighbor in adj_list[node]:
                if neighbor not in visited:
                    if dfs(neighbor, visited, stack):
                        return True
                elif neighbor in stack:
                    return True
            stack.remove(node)
            return False
        
        # Perform DFS for each node
        visited = set()
        stack = set()
        for node in nodes:
            if node['id'] not in visited:
                if dfs(node['id'], visited, stack):
                    return False
        return True

    # Check if the graph is a DAG
    is_dag_result = is_dag(nodes, edges)

    # Return the response in the same format
    return JSONResponse(content={
        'status': 'parsed',
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result,
        'nodes': nodes,
        'edges': edges
    })
