const $root = document.body;

function parseSelector(selector) {
	const targetStr = selector.slice(1);
	const classRegex = /^\./g;
	const idRegex = /^#/g;

	if (classRegex.test(selector))
		return ["className", targetStr];
	if (idRegex.test(selector)) return ["id", targetStr];
	return ["nodeName", selector.toUpperCase()];
}

function findAllTarget(
	$parent,
	identifier,
	targetStr,
	targetNodes = []
) {
	if ($parent[identifier] === targetStr) {
		targetNodes.push($parent);
		return targetNodes;
	}

	if ($parent.children.length > 0) {
		for (let i = 0; i < $parent.children.length; i++) {
			targetNodes = findAllTarget(
				$parent.children[i],
				identifier,
				targetStr,
				targetNodes
			);
		}
	}
	return targetNodes;
}

function findTargetByDFS($parent, identifier, targetStr) {
	let targetNode = null;
	if ($parent[identifier] === targetStr) return $parent;

	if ($parent.children.length > 0) {
		for (let i = 0; i < $parent.children.length; i++) {
			if (targetNode) break;
			targetNode = findTargetByDFS(
				$parent.children[i],
				identifier,
				targetStr
			);
		}
	}
	return targetNode;
}

function findTargetByBFS($current, identifier, targetStr) {
	let targetNode = null;
	const queue = [$current];

	while (queue.length > 0) {
		const currentNode = queue.shift();
		if (currentNode[identifier] === targetStr)
			targetNode = currentNode;

		for (const child of currentNode.children) {
			queue.push(child);
		}
	}
	return targetNode;
}

const Selector = {
	querySelector(selector) {
		const [identifier, targetStr] = parseSelector(selector);
		console.time("result");
		// const result = findTargetByBFS(
		// 	$root,
		// 	identifier,
		// 	targetStr
		// );

		const result = findTargetByDFS(
			$root,
			identifier,
			targetStr
		);
		console.timeEnd("result");
		return result;
	},
	querySelectorAll(selector) {
		const [identifier, targetStr] = parseSelector(selector);
		return findAllTarget($root, identifier, targetStr);
	},
};

export default Selector;
