function Part(props){
    let partName = props.partName
    let nExercises = props.nExercises

    return(
        <p>
            {partName} {nExercises}
        </p>
    )
}

export default Part