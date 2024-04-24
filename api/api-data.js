export class ApiData {

    static async fetchAll () {
        const response = await fetch('./src/data/data.json');
        const data = await response.json();
        return data;
    }
}