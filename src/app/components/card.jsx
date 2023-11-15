import 'src/app/styles/app.css'; 

export default function Card(props) {
  return (
    <div className="shadow m-5 rounded">
      <div className="h-[200px] ">
          <img className="card-image" src={props.image} alt="map" />        
      </div>
      <div className="h-[150px] p-4">
        <h1 className='text-xs xl:text-sm text-left float-left'><b>{props.issue}</b></h1> 
        <h1 className='text-xs xl:text-sm text-right float-right'>{props.fecha}</h1> 
        <hr className='clear-both'/>
        <h2 className='text-xs xl:text-sm'>{props.name}</h2>
        <h2 className='text-xs xl:text-sm'>{props.description}</h2>
      </div>
    </div>
  )
}
