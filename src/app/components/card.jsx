import 'src/app/styles/app.css'; // Tell webpack that Button.js uses these styles

export default function Card(props) {
  return (
    <div class="shadow box-content m-5  p-4 rounded">
      <div class="">
          <img class="" src={props.image} alt="map" />        
      </div>
        <div>
          <h1 class="text-xl"><b>{props.issue}</b></h1>
          <h2>{props.name}</h2>
          <h2>{props.description}</h2>
        </div>
    </div>
  )
}
