class TreeNode<T> {
    data: T;
    child: TreeNode<T> | null;
    sibling: TreeNode<T> | null;

    constructor(data: T, child: TreeNode<T> | null, sibling: TreeNode<T> | null) {
        this.data = data;
        this.child = child;
        this.sibling = sibling;
    }
}

const A = new TreeNode("A", null, null);
const B = new TreeNode("B", null, null);
const C = new TreeNode("C", null, null);
const D = new TreeNode("D", null, null);
const E = new TreeNode("E", null, null);
const F = new TreeNode("F", null, null);
const G = new TreeNode("G", null, null);

A.child = B;
B.child = E;
B.sibling = C;
C.sibling = D;
C.child = F;
F.sibling = G;

function DFS<T>(startNode: TreeNode<T>) {
    if (startNode === null) {
        return;
    }
    console.log(startNode.data);
    DFS(startNode.child as TreeNode<T>);
    DFS(startNode.sibling as TreeNode<T>);
}

DFS(A);
