exports.onRouteUpdate = ({ location, prevLocation }) => {
    document.body.style.overflow = '';
}

exports.shouldUpdateScroll = ({
    routerProps: { location },
    prevRouterProps,
    getSavedScrollPosition,
}) => {
    const { pathname } = location;

    if (prevRouterProps) {
        const {
            location: { pathname: oldPathname },
        } = prevRouterProps

        // list of routes for the scroll-to-top-hook
        const noScrollRoutes = ['/studio/startup', '/studio/upstarts', '/studio/cofounder', '/experiments/lab', '/experiments/enterprise']
        // if the new route is part of the list above, don't scroll
        if (noScrollRoutes.indexOf(pathname) !== -1 && noScrollRoutes.indexOf(oldPathname) !== -1) {
            return false;
        }

        return true;
    }
}