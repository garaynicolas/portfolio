export const API_URL = {
    apiURL: 'http://localhost:8080',

    PERSONA_BY_ID: function (id) {
        return `${this.apiURL}/persona/traer/${id}`;
    },

    PROJECTS: function () {
        return `${this.apiURL}/projects`;
    },

    PERSONA_EDIT: function () {
        return `${this.apiURL}/persona/edit/1`;
    }
}