import './styles.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker';

const Map = ({ petshops }) => {

  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
        center={{
          lat: -23.542738,
          lng: -46.177095,
        }}
        defaultZoom={15}
      >
        {[1].map((p) => (
          <Marker lat={-23.542738} lng={-46.177095} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
