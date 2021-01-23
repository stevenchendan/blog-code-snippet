
visited = set() 
# depth first search(recursive)
def dfs_recursive(node, visited):
    # terminate
    if node in visited:
    	# already visited 
    	return 

	visited.add(node) 

	# logic corde for current node

	for next_node in node.children(): 
		if next_node not in visited: 
			dfs_recursive(next_node, visited)

#dfs non recursive
def dfs_iterative(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other logic code
