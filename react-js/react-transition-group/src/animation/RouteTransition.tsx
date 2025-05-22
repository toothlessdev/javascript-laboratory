import { TransitionGroup, CSSTransition } from "react-transition-group";

export const RouteTransition = ({ location, children }: RouteTransitionProps) => {
    const pathname = location.pathname;

    return (
        <TransitionGroup className={"transition-wrapper"}>
            <CSSTransition key={pathname} timeout={300} classNames={"navigate-push"}>
                {children}
            </CSSTransition>
        </TransitionGroup>
    );
};
