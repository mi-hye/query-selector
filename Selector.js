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

function findTargetByBFS2($current, identifier, targetStr) {
	let targetNode = null;

		if(!$current.nextElementSibling)
		findTargetByBFS($current.children[0], identifier, targetStr)

	return targetNode;
}

const Selector = {
	querySelector(selector) {
		const [identifier, targetStr] = parseSelector(selector);
		return findTargetByBFS($root, identifier, targetStr);
		// return findTargetByDFS($root, identifier, targetStr);
	},
	querySelectorAll(selector) {},
};

export default Selector;
