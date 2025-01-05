# Node.js Server Memory Leak

This repository demonstrates a common Node.js memory leak scenario and its solution.  The server application fails to properly close connections, resulting in a gradual increase in memory usage over time until the server crashes.

## Bug

The `server.js` file contains a simple HTTP server that intentionally keeps connections open. This simulates a common error in handling requests where connections are not properly closed, leading to a memory leak.

## Solution

The `serverSolution.js` file provides a corrected version of the server that addresses the memory leak by properly handling the closing of connections after requests are processed.