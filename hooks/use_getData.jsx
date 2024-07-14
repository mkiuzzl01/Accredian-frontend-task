import axios from 'axios';

export const use_getData = async ({path}) => {
    try {
        const {data} = await axios.get(path); 
        return data
    } catch (error) {
        return err = error.message;
    }   
};
return {data,err}