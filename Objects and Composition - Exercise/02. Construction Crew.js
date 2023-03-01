function constructionCrew(object){

    if(object.dizziness == true){
        const waterNeeded = object.weight * 0.1 * object.experience;
        object.levelOfHydrated += waterNeeded;
        object.dizziness = false;
    }
    return object;

}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
)
constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
)
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
)