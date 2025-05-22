type FiberNodeTag = "FunctionComponent" | "ClassComponent" | "HTMLHostElement";

interface FiberNode {
    tag: FiberNodeTag;
    type: string;
    child: FiberNode | null;
    sibling : FiberNode | null;
    memoizedProps: Props extends Record<string,unknown>;
}
