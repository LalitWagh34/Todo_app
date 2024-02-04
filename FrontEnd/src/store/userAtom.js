import {atom} from 'recoil';

export const signupAtom = atom({
    key:"signupAtom",
    default:{
        firstName:"",
        lastname:"",
        userName:"" ,
        password:""
    },
});

export const signinAtom = aton({
    key:"signinAtom",
    default:{
        userName:"",
        password:""
    }
})