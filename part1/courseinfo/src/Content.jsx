import Part from './Part.jsx'

function Content(props){
    let parts = props.parts

    return(
        <div>
            <Part partName = {parts[0]['name']} nExercises = {parts[0]['exercises']} />
            <Part partName = {parts[1]['name']} nExercises = {parts[1]['exercises']} />
            <Part partName = {parts[2]['name']} nExercises = {parts[2]['exercises']} />
        </div>
    )
}

export default Content