

export default function profilesReducer(profiles, action){
    switch(action.type){
        case 'add_profile':
            let proxId = 1 + profiles.map(prof => prof.Id).reduce((x,y)=> Math.max(x,y));
            return profiles.concat ([{...action.payload, id:proxId}]);

        case 'update_profile':
            let index = profiles.map(prof => prof.Id).indexOf(action.payload.Id);
            let profilesUpdated = profiles.slice();
            profilesUpdated.splice(index, 1, action.payload);
            return profilesUpdated;

        case 'delete_profile':
            return profiles.filter((prof) => prof.id !== action.payload);

        default:
            throw new Error();

    }

}