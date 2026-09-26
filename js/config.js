/* ==========================================================
   M3ak Morocco — config.js
   Browser-side settings. Nothing here is secret: a Google Maps
   browser key is always visible to visitors, so protect it in
   Google Cloud Console instead:
     - Application restriction: HTTP referrers (your site's domains)
     - API restriction: Maps JavaScript API + Routes API

   googleMapsApiKey — leave empty and the Transport page falls back to
                      the plain Google Maps embed (no drawn lines).
   googleMapsMapId  — needed for markers; "DEMO_MAP_ID" is Google's
                      test id, create your own Map ID for production.
========================================================== */
window.M3akConfig = {
    googleMapsApiKey: "",
    googleMapsMapId: "DEMO_MAP_ID"
};
