import axios from "axios";
import { ref } from "vue";
import router from '../router';




export default function useDeveloper(){

    const developers = ref([]);
    const errors = ref([]);
    const developer= ref([]);

    const getDevelopers = async () =>{
        let response = await axios.get('/api/developers/');
        developers.value = response.data.data;
    }

    const storeDeveloper = async (data) => {
        try {
            await axios.post('/api/developers', data);
            router.push({name:'developers.index'});
        } catch (error) {
            const storeDevelopersErrors = error.response.data.errors;

            for(const key in storeDevelopersErrors){
                errors.value = storeDevelopersErrors;
            }
        }
    }

    const getDeveloper = async (id) => {
        let response = await axios.get('/api/developers/' +id);
        developer.value = response.data.data;
    }

    const updateDeveloper  = async (id) => {
        try {
            await axios.put('/api/developers/' +id, developer.value);
            router.push({name:'developers.index'});
        } catch (error) {
            const storeDevelopersErrors = error.response.data.errors;

            for(const key in storeDevelopersErrors){
                errors.value = storeDevelopersErrors;
            }
        }
    }

    const destroyDeveloper = async (id) => {
        if(!window.confirm('Delete this customer ?')) return ;

        await axios.delete('/api/developers/' +id, developer.value);
        await getDevelopers();
    }

    return{
        developers,
        errors,
        developer,
        getDevelopers,
        storeDeveloper,
        getDeveloper,
        updateDeveloper,
        destroyDeveloper
    }




}