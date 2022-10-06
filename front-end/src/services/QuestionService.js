import api from "./HttpService";

export default class QuestionService { 
    /**
     * Get countries
     *
     * @param filters
     */
    getQuestions (filters = {}) {
        return api.get('/v1/questions', {
            params: filters
        });
    }
}