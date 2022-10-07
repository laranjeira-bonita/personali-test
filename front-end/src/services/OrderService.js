import api from "./HttpService";

export default class OrderService { 
     /**
     * Post response
     *
     * @param responses
     */
      sendResponse (responses = []) {
        return api.post('/v1/questions', {
            responses: responses
        });
    }
}