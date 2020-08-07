/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onRouteUpdate = ({ location }) => scrollToAnchor(location)

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Object} location -
 * @param {Number} [mainNavHeight] - the height of any persistent nav -> document.querySelector(`nav`)
 */
function scrollToAnchor(location, mainNavHeight = 0) {
  // Check for location so build does not fail
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`).offsetTop
    const menu = document.querySelector('.main-menu');

    window.scrollTo({
      top: item - mainNavHeight,
      behavior: "smooth",
    });
  }

  return true
}
