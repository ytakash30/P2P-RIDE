import { useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { UberContext } from '../context/uberContext';

const style = {
  wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);
  console.log(pickupCoordinates, dropoffCoordinates);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [73.855131, 18.518464],
      zoom: 10,
    });

    const drawRoute = async () => {
      if (pickupCoordinates && dropoffCoordinates) {
        const coordinates = await getRoute(pickupCoordinates, dropoffCoordinates);
        if (coordinates) {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates,
                },
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#00b4d9',
              'line-width': 6
              
            },
          });
        }
      }
    };

    const getRoute = async (start, end) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        return data.routes[0].geometry.coordinates;
      } catch (error) {
        console.error('Error fetching route:', error);
        return null;
      }
    };

    drawRoute();

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 200,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map); //POINT THE LOCATION
  };

  return <div className={style.wrapper} id='map' />;
};

export default Map;
