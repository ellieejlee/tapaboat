 // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

      var map, heatmap;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 51.752881, lng: 3.319920},
          mapTypeId: google.maps.MapTypeId.SATELLITE
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      }

      function toggleHeatmap() {
        heatmap.setMap(heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }

      // Heatmap data: 500 Points
      function getPoints() {
        return [
          new google.maps.LatLng(52.020045, 3.013525),
          new google.maps.LatLng(51.958661, 3.010000),
          new google.maps.LatLng(51.958661, 3.010000),
          new google.maps.LatLng(51.958661, 3.010002),
          new google.maps.LatLng(51.958661, 3.010002),
          new google.maps.LatLng(51.958661, 3.020000),
          new google.maps.LatLng(51.958661, 3.020000),
          new google.maps.LatLng(51.958661, 3.010000),
          new google.maps.LatLng(51.958661, 3.010002),
          new google.maps.LatLng(51.958661, 3.010042),
          new google.maps.LatLng(51.958661, 3.010004),
          new google.maps.LatLng(51.958661, 3.021999),
          new google.maps.LatLng(51.958661, 2.999999),
          new google.maps.LatLng(51.958661, 2.999999),
          new google.maps.LatLng(51.958661, 2.999999),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.625473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.948661, 3.078473),
          new google.maps.LatLng(51.958661, 3.066473),
          new google.maps.LatLng(51.928661, 3.058473),
          new google.maps.LatLng(51.958661, 3.068493),
          new google.maps.LatLng(51.958661, 3.058473),
          new google.maps.LatLng(51.958661, 3.058473),
          new google.maps.LatLng(51.958661, 3.148473),
          new google.maps.LatLng(51.958661, 3.048473),
          new google.maps.LatLng(51.958661, 4.048473),
          new google.maps.LatLng(52.958661, 2.048473),
          new google.maps.LatLng(52.958661, 2.048473),
          new google.maps.LatLng(52.948661, 2.078473),
          new google.maps.LatLng(53.958661, 3.066473),
          new google.maps.LatLng(50.928661, 3.158473),
          new google.maps.LatLng(52.958661, 3.468473),
          new google.maps.LatLng(52.958661, 3.558473),
          new google.maps.LatLng(52.958661, 3.858473),
          new google.maps.LatLng(56.958661, 3.478473)
        ];
      }